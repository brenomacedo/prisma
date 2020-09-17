import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // const allUsers = await prisma.user.create({
    //     data: {
    //         email: 'b88660501@gmail.com',
    //         name: 'breno macêdo'
    //     }
    // })

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main().catch(err => {
    throw err
}).finally(async () => {
    await prisma.$disconnect()
})