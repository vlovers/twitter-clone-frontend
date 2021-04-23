import { filesApi } from "../services/api/filesApi";



export const uploadImage = async (files: any): Promise<any> => {

    let uploaded: any = [];
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i].file;
        const uid = Math.round(Math.random() * 1000);
        uploaded = [
            ...uploaded,
            {
                uid,
                name: file.name,
                status: 'uploading',
            },
        ];
        // eslint-disable-next-line no-loop-func
        await filesApi.upload(file).then(({ data }) => {
            uploaded = uploaded.map((item: any) => {
                if (item.uid === uid) {
                    return `${data.file._id}`;
                }
                return item;
            });
        });
    }

    return uploaded;
        
}

// import { filesApi } from "../services/api/filesApi";

// export const uploadImage = async (files: any) => {
//     console.log(files);
    
//     let uploaded: any = [];
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i].file;
//             const uid = Math.round(Math.random() * 1000);
//             uploaded = [
//                 ...uploaded,
//                 {
//                     uid,
//                     name: file.name,
//                     status: 'uploading',
//                 },
//             ];
//             // eslint-disable-next-line no-loop-func
//             await filesApi.upload(file).then(({ data }) => {
//                 uploaded = uploaded.map((item: any) => {
//                     if (item.uid === uid) {
//                         return {
//                             status: 'done',
//                             uid: data.file._id,
//                             name: data.file.filename,
//                             url: data.file.url,
//                         };
//                     }
//                     return item;
//                 });
//             });
//         }
// }