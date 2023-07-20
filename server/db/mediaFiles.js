import {prisma} from "~/server/db/index";
export const createMediaFile = (mediaFileData) => {
    return prisma.mediaFile.create({
        data: mediaFileData
    }) 
}