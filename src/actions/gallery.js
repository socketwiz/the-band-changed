
export const UPDATE_IMAGES = 'UPDATE_IMAGES';

export function updateImages(images) {
    return {
        'type': UPDATE_IMAGES,
        'images': images
    };
}
