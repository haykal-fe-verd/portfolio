/**
 * Returns true if the given path is a URL or an absolute local path.
 * Used to determine whether to render an <Image> or a fallback.
 */
export function isMediaPath(path: string): boolean {
    return path.startsWith("/") || path.startsWith("http");
}
