export const sanitizeValues = (value: string): string => {
    let text: string = value;

    text = text.trim();

    text = text.split('&').join('&amp;');

    text = text.split('"').join('&quot;');

    text = text.split('<').join('&lt;');

    text = text.split('>').join('&gt;');

    text = text.split("'").join('&apos;');

    return text;
}

export const temporalName = (ext: string = 'xml'): string => `${new Date().getTime()}.${ext}`
