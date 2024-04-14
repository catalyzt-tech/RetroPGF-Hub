export function ConvertStringToTime(time:string) {
    const date = new Date(time);

    return date.toLocaleDateString('en-GB', {
        day:"numeric",
        month:"short",
        year:"numeric"
    });
}

export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


export function convertImageClodinary(url:string, width:number, height:number){
    if(url){
        const publicId = url.split('/').pop()?.split('.')[0];

        if(publicId){
            let targetBanner = `http://res.cloudinary.com/dxoowohf8/image/upload/w_${width},h_${height},c_scale/v1713108616/retropgf3/${publicId}.png`;
            return targetBanner
        }
        return ""
    } else {
        return ""
    }
}