import React, {Component, useState} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import { filesApi } from '../services/api/filesApi';
import { IconButton } from '@material-ui/core';
import { ImageSearch, PhotoOutlined as PhotoOutlinedIcon } from '@material-ui/icons';
import { ImageObj } from './AddTweetForm';

interface UploadImgesProps {
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

const DropzoneAreaExample: React.FC<UploadImgesProps> = ({ onChangeImages }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const removeImage = (url: string) => {
        onChangeImages((prev) => prev.filter((obj: ImageObj) => obj.blobUrl !== url))
    };

    const handleClickImage = () => {
        
        if (inputRef.current) {
            inputRef.current.addEventListener('change', (event) => {
                if (event.target) {
                    const target = event.target as HTMLInputElement;
                    const file = target.files?.[0];
                    if (file) {
                        const fileObj = new Blob([file])
                        
                        onChangeImages((prev) => [ ...prev, {
                            file,
                            blobUrl: URL.createObjectURL(fileObj)
                        }])
                    }
                }
            })
        }
    };

    const onSelectFiles = async (files: any) => {
        let uploaded: any = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
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
                        return {
                            status: 'done',
                            uid: data.file._id,
                            name: data.file.filename,
                            url: data.file.url,
                        };
                    }
                    return item;
                });
            });
        }
    };

  
    return (
        <div>
            <IconButton onClick={handleClickImage} color="primary">
                <label htmlFor="upload-input">
                    <PhotoOutlinedIcon/>
                </label>
            </IconButton>
            <input ref={inputRef} id="upload-input" hidden  type="file"/> 
            <div>
                {/* {images && images.map((url: string) => (
                    <img src={url} alt="Photo"/>
                ))} */}
            </div>
        </div>
        
    )
}

export default DropzoneAreaExample;