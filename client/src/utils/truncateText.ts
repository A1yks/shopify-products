function truncateText(text: string, n: number) {
    return text.length > n ? text.substring(0, n - 3) + '...' : text;
}

export default truncateText;
