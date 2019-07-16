import React, { useState, useEffect }  from 'react';
import  PlacesData from './create-trip-form-place';
import './create-trip-form.css'
import { getTripById } from '../../../actions';

export default function TripForm({ items, handleSubmit, removeTrip }) {
    const [id, useId] = useState(items.id)
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
                 'places': places,
                 'published': new Date().valueOf()
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
    }, [id, title, description, placesValid])

        return(
            <div className="container w-80">
                <form onSubmit={ (e) => submit(e)}>
                    <fieldset>
                        <legend className="py-5 text-center">Share your trip data here</legend>
                        <div className="row">
                            <div className="col-md-9 mb-3">
                                { tripById() }
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
                                <div className="mt-3 h-75">
                                    <p className="text-center text-justify">Please enter title, description, and general places information,
                                    only when all data populated form can be submitted.
                                    </p>
                                    <button type="submit" className="btn btn-primary d-block mx-auto" style={{marginBottom: "5%", width: "100px"}}  disabled={ validation } >Submit</button>
                                    { removeButton() }
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
            
            function removeButton() {
                if(id) {
                    return (
                        <button type="button" className="btn btn-danger d-block mx-auto" style={{marginBottom: "1%", width: "100px"}} onClick={(e) => rmTrip(e, id) } >Remove</button>
                    )
                } 
            }

            function tripById(){
                if(id){
                    return (
                        <div className="form-group">
                            <span className="mx-1">Trip id:</span>
                            <span className="badge badge-pill badge-light"><strong>{id}</strong></span>
                            <span className="mx-1">Published:</span>
                            <span className="badge badge-pill badge-light"><strong>{new Date(Number(items.published)).toLocaleString()}</strong></span>
                        </div>
                    )
                }
            }
        
        
    }