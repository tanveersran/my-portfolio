import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import {schemaTypes} from './my-portfolio/schemas/index'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
    schema: {
        types: (prev: any, context: any) => {
            console.log(context) // logs { projectId, dataset' }
            return [...schemaTypes, ...prev]
        },
    },
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

