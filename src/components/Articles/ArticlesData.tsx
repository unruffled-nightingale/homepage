export type ArticleDataT = {
  name: string;
  url: string;
  description?: string;
};

export const ARTICLES_DATA: ArticleDataT[] = [
  {
    name: "WHY YOU NEED AN EVENT STREAM REGISTRY",
    url: "https://medium.com/babylon-technology-blog/why-you-need-an-event-stream-registry-9b2a81b6cc98",
  },
  {
    name: "IMPLEMENTING AN EVENT STREAM REGISTRY",
    url: "https://medium.com/@unruffled.nightingale/implementing-an-event-stream-registry-9b242a06025",
  },
  {
    name: "BUILDING A DATA-LINEAGE TOOL FROM AN EVENT STREAM REGISTRY",
    url: "https://medium.com/@unruffled.nightingale/building-a-data-lineage-tool-from-an-event-stream-registry-8d984506618e",
  },
];

export const TALKS_DATA: ArticleDataT[] = [
  {
    name: "KAFKA SUMMIT 2023",
    url: "https://www.kafka-summit.org/sessions/why-you-need-an-event-stream-registry",
  },
];
