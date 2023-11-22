export declare class musicCard {
  constructor(options?: {
    name?: string;
    author?: string;
    color?: string;
    theme?: "classic" | "dynamic";
    brightness?: number;
    thumbnail?: string;
    progress?: number;
  });

  public setName(name: string): this;
  public setAuthor(author: string): this;
  public setColor(color: string): this;
  public setTheme(theme: "classic" | "dynamic"): this;
  public setBrightness(brightness: number): this;
  public setThumbnail(thumbnail: string): this;
  public setProgress(progress: number): this;
  public setRequester(requester: string): this;

  public build(): Promise<Buffer>;
}
