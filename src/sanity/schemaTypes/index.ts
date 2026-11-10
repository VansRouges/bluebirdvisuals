import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", title: "Alternative text", type: "string" })],
  });

const videoUrlField = (name: string, title: string) =>
  defineField({ name, title, type: "url", description: "Optional MP4/WebM URL. When provided, the website displays this video instead of the image.", validation: (rule) => rule.uri({ scheme: ["http", "https"] }) });

const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    imageField("coverImage", "Cover image"),
    videoUrlField("coverVideoUrl", "Cover video URL"),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
    defineField({ name: "enabled", title: "Display on website", description: "Turn off to hide this project without deleting it.", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title", media: "coverImage" } },
});

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "quote", type: "text", rows: 4, validation: (rule) => rule.required() }),
    imageField("portrait", "Portrait"),
    videoUrlField("portraitVideoUrl", "Portrait video URL"),
    defineField({ name: "order", type: "number", initialValue: 0 }),
    defineField({ name: "enabled", title: "Display on website", description: "Turn off to hide this testimonial without deleting it.", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "portrait" } },
});

const faq = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
    defineField({ name: "enabled", title: "Display on website", description: "Turn off to hide this question without deleting it.", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "question" } },
});

const experience = defineType({
  name: "experience",
  title: "Work experiences",
  type: "document",
  fields: [
    defineField({ name: "role", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "company", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "period", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "highlighted", type: "boolean", initialValue: false }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
    defineField({ name: "enabled", title: "Display on website", description: "Turn off to hide this experience without deleting it.", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "role", subtitle: "company" } },
});

const stack = defineType({
  name: "stack",
  title: "Stacks",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "string", validation: (rule) => rule.required() }),
    imageField("logo", "Logo"),
    videoUrlField("logoVideoUrl", "Logo video URL"),
    defineField({ name: "highlighted", type: "boolean", initialValue: false }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
    defineField({ name: "enabled", title: "Display on website", description: "Turn off to hide this stack without deleting it.", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "name", subtitle: "description", media: "logo" } },
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Studio name", type: "string", initialValue: "BlueBirdVisuals" }),
    defineField({ name: "contactEmail", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "projectsCompleted", type: "number" }),
    defineField({ name: "yearsExperience", type: "number" }),
    defineField({ name: "happyClients", type: "number" }),
  ],
});

const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", type: "string", initialValue: "About Me" }),
    defineField({ name: "heading", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Paragraphs", type: "array", of: [{ type: "text", rows: 4 }] }),
    imageField("stageImage", "Stage image"),
    videoUrlField("stageVideoUrl", "Stage video URL"),
    imageField("selfieImage", "Selfie image"),
    videoUrlField("selfieVideoUrl", "Selfie video URL"),
    defineField({ name: "enabled", title: "Display on website", description: "Turn off to hide the About Me section and gallery.", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "heading", media: "stageImage" } },
});

const footerSettings = defineType({
  name: "footerSettings",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "enabled", title: "Display footer", type: "boolean", initialValue: true }),
    defineField({ name: "heading", title: "Left heading", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "buttonLabel", title: "Button text", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "buttonUrl", title: "Button URL", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "primaryLinks", title: "Navigation links", type: "array", of: [{ type: "object", fields: [defineField({ name: "label", type: "string" }), defineField({ name: "url", type: "string" }), defineField({ name: "enabled", title: "Display link", type: "boolean", initialValue: true })] }] }),
    defineField({ name: "socialLinks", title: "Social links", type: "array", of: [{ type: "object", fields: [defineField({ name: "label", type: "string" }), defineField({ name: "url", type: "url", validation: (rule) => rule.uri({ scheme: ["http", "https"] }) }), defineField({ name: "enabled", title: "Display link", type: "boolean", initialValue: true })] }] }),
    defineField({ name: "copyrightText", type: "string" }),
    defineField({ name: "creditText", type: "string" }),
  ],
});

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, testimonial, faq, experience, stack, siteSettings, aboutPage, footerSettings],
};
