import React, {useState} from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import Layout from '../common/Layout';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import useForm from '../hooks/useForm';
import Authenticated from '../utils/Authenticated';

const CREATE_EVENT = gql`

    mutation addEvent($data:EventAdd!){
        createEvent(data:$data){
            _id
        }
    }
`

function EventCreate(props){
    const [coverPhoto, setCoverPhoto] = useState('');
    const [execMutation, { loading, data, error}] = useMutation(CREATE_EVENT);
    const { inputs:addressInputs, handleInputChange:addressHandle } = useForm();
    const sendMutation = (inputs) => {
        execMutation({variables:{
            data:{
                ...inputs,
                banner:coverPhoto,
                address:{
                    ...addressInputs
                }
            }
        }})
        
    }
    if(!loading && data) props.history.push('/') 
    if(!loading && error) alert(error.message);
    const handleCover = (event) => {
        const reader =  new FileReader();
        const file = event.target.files[0];

        reader.onloadend = () => {
            setCoverPhoto(file)
        }
        reader.readAsDataURL(file);
    }
    const { inputs,handleInputChange,handleSubmit } = useForm(sendMutation);

    return(
        <Layout>
           <div className="row">
               <div className="col-lg-8 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <Input 
                            label="Title: "
                            type="text"
                            name="title"
                            placeholder="My title"
                            value={inputs.title}
                            change={handleInputChange}
                            required
                        />

                        <TextArea label="Description: " 
                            value={inputs.description} 
                            name="description"
                            rows={12}
                            cols={12}
                            change={handleInputChange}
                        />

                        <Input 
                            label="Date: "
                            type="text"
                            name="date"
                            placeholder="2020-06-06"
                            value={inputs.date}
                            change={handleInputChange}
                        />

                        <Input 
                            label="Cover: "
                            type="file"
                            name="cover"
                            change={handleCover}
                        />

                        <h2>Address: </h2>
                        <Input 
                            label="Street: "
                            type="text"
                            name="street"
                            value={addressInputs.street}
                            change={addressHandle}
                        />
                        <Input 
                            label="Number: "
                            type="text"
                            name="number"
                            value={addressInputs.number}
                            change={addressHandle}
                        />
                        <Input 
                            label="State: "
                            type="text"
                            name="state"
                            value={addressInputs.state}
                            change={addressHandle}
                        />
                        <Input 
                            label="City: "
                            type="text"
                            name="city"
                            value={addressInputs.city}
                            change={addressHandle}
                        />
                        <Input 
                            label="Country: "
                            type="text"
                            name="country"
                            value={addressInputs.country}
                            change={addressHandle}
                        />
                        <Input 
                            label="ZIP: "
                            type="text"
                            name="zip"
                            placeholder="2020-06-06"
                            value={addressInputs.zip}
                            change={addressHandle}
                        />

                    <div className="form-group">
                        <button type="submit" className="btn bg-dark text-light" > 
                            Save 
                        </button>
                    </div>

                    </form>
               </div>
           </div>
        </Layout>
    )



}

export default Authenticated(EventCreate);