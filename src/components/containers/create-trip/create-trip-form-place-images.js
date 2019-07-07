import React, { useState, useEffect }  from 'react';
import PlaceImagePicker from '../../images/PlaceImagePicker';
 
export default function imagesBox({media, updateMedia}) {

                const [selectedImages, useSelectedImages] = useState(media.carousel ? media.carousel.map(item => item) : [media.image]);
                const [imagesValidation, useImagesValidation] = useState("badge badge-secondary");

                useEffect(() => {
                    updateMedia(selectedImages)
                    selectedImages.length > 0 ? useImagesValidation('') : useImagesValidation("badge badge-secondary");
                  }, [selectedImages]);


                    if (media.carousel) {
                        return(
                        <React.Fragment>
                            <span className={ imagesValidation }>Place images:</span>
                            <PlaceImagePicker 
                                images={media.carousel.map((item, i) => ({src: item.images.low_resolution.url, value: i, object: item}))}
                                onPick = {(images) => useSelectedImages(images.map( element => { return element.src })) }
                                multiple
                                />
                        </React.Fragment>
                        )
                    } else {
                        return(
                            <React.Fragment>
                                <span className={ imagesValidation }>Place image:</span>
                                <div className="col-md-12">
                                    <img className="rounded mx-auto d-block" src={media.image.low_resolution.url} style={{ width:"200px", height:"180px" }} />
                                </div>
                            </React.Fragment>
                        )

                    }
}