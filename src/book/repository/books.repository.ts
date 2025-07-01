import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class BooksRepository {
    constructor(private prisma: PrismaService) {}

    async create(book: Prisma.BookCreateInput): Promise<void> {
		await this.prisma.product.create({
			data: book,
		});
	}

    async save(data: Prisma.BookUncheckedCreateInput): Promise<void> {
		await Promise.all([
			this.prisma.book.update({
				where: {
					id: data.id?.toString(),
				},
				data,
			}),
		]);
	}

    async delete(book: Prisma.BookUncheckedCreateInput): Promise<void> {
		await this.prisma.book.delete({
			where: {
				id: book.id?.toString(),
			},
		});
	}

}


