import React, { useState, useEffect }  from 'react';
import  PlacesData from './create-trip-form-place';
import './create-trip-form.css'

export default function TripForm({ items, handleSubmit, removeTrip }) {
    const [places, usePlaces] = useState(items.places)
    const [title, useTitle] = useState(items.title)
    const [description, useDescription] = useState(items.description)
    const [placesValid, usePlacesValid] = useState(items.places.map(item => false))
    const [titleValidation, useTitleValidation] = useState("badge badge-secondary");
    const [descriptionValidation, useDescriptionValidation] = useState("badge badge-secondary");
    const [validation, useValidation] = useState(false);

    function validate() {
        title ? useTitleValidation('') : useTitleValidation("badge badge-secondary");
        description ? useDescriptionValidation('') : useDescriptionValidation("badge badge-secondary");
        var isPlacesValid = true;
        placesValid.map( item =>  { if ( !item ) { isPlacesValid = false; return true }  })
        useValidation(!(title && description && isPlacesValid))
    } 


  
    function getInputValue() {
      return ( { ...items,
                 'title': title,
                 'description': description,
                 'places': places
                } )
    }

    function submit(e) {
        e.preventDefault()
        handleSubmit(getInputValue())
    }

    function updatePlaceData(isValid, i, place) {
        if (isValid) {
            usePlaces(places.map( (item, index) => index === i ? place : item))
        }
        usePlacesValid(placesValid.map((item, index) => index === i ? isValid : item))
    }
    
    function rmTrip(e, id){
        e.preventDefault()
        removeTrip(id)
    }

    useEffect(() => {
        validate()
    }, [title, description, placesValid])

        return(
            <div className="container w-80">
                <form onSubmit={ (e) => submit(e)}>
                    <fieldset>
                        <legend className="py-5 text-center">Share your trip data here</legend>
                        {  idFieldData(items.id) }
                        <div className="row">
                            <div className="col-md-9 mb-3">
                                <div className="form-group">
                                    <span className={"mb-2 " + titleValidation }>Trip title:</span>
                                    <input className="form-control" id="inputTitle" 
                                    aria-describedby="titleHelp" placeholder="enter trip title" 
                                    defaultValue={title} onChange={ e => useTitle(e.target.value) }/>
                                </div>
                                <div className="form-group">
                                    <span className={"mb-2 " + descriptionValidation }>General trip description:</span>
                                    <textarea  className="form-control" id="inputDescription" rows="6" 
                                    defaultValue={description} onChange={ e => useDescription(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-md-3">
                                <div className="mt-5 h-75">
                                    <p className="text-center text-justify">Please enter title, description, and general places information,
                                    only when all data populated form can be submitted.
                                    </p>
                                    <button type="submit" className="btn btn-primary d-block mx-auto" style={{marginBottom: "1%"}}  disabled={ validation } >Submit</button>
                                </div>
                            </div>
                        </div>    
                            <div className="form-group">
                                <label htmlFor="inputPlaces">Places:</label>
                                <PlacesData items={items} updatePlaceData={updatePlaceData} />
                            </div>
                    </fieldset>
                </form>
            </div>
            );
            
            function idFieldData(id) {
                if(id) {
                    return (
                        <div className="form-group row">
                        <button type="button" className="btn btn-danger" onClick={(e) => rmTrip(e, id) }>Remove trip</button>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Trip id</label>
                        <div className="col-sm-10">
                            <input ref="generalId" type="text" readOnly className="form-control-plaintext" id="tripId" defaultValue={id} />
                        </div>
                    </div>
                    )
                } 
            }
        
        
    }