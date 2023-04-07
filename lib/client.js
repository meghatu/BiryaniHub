import  sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "l9gfuueb",
    dataset: "production",
    apiVersion: "2023-01-23",
    useCdn: true,
    token: "sk2wAuNvgjGEBfpn43lN8GKSfHsDYAvaDqLSRPmtqjCAv4sQBGQJE36AE6zdc31qQzscFBHUMCCMBUqRlfsmZrmjbQofbK86ru52Gt2wsRJ1s1jD1QLMqF84FXQKH3rIGth1HsQOA91qM8NwUZ5UfCvAwO7Ph5CnVbVSozI7KBjbA3C21cZg",
    ignoreBrowserTokenWarning: true
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)