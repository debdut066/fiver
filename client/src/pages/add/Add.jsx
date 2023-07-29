import React, { useReducer, useState } from 'react'
import "./Add.scss"
import { gigReducers, INIIIAL_STATE } from '../../reducers/gigReducers';

const Add = () => {
  const [state, dispatch] = useReducer(gigReducers, INIIIAL_STATE)
  const [singleFile, setSingleFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name , value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: name, value: value },
    });
  }

  const handleFeatures = (e)=> {
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target.value,
    });
    // e.target.value = "";
  }

  console.log(state)

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor=''>Title</label>
            <input
              type="text"
              name='title'
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
              value={state.title}
            />
            <label htmlFor=''>Category</label>
            <select name="cat" id="cats" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className='images'>
              <div className='imagesInput'>
                <label htmlFor=''>Cover Image</label>
                <input 
                  type='file' 
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor=''>Upload Images</label>
                <input 
                  type="file" 
                  onChange={(e) => setFiles(e.target.files[0])}
                  multiple
                />
              </div>
              <button>
                { isUploading ? "uploading" : "upload"}
              </button>
            </div>
            <label htmlFor=''>Description</label>
            <textarea 
              name="desc" 
              id="" 
              placeholder="Brief descriptions to introduce your service to customers" 
              cols="0" 
              rows="16"
              value={state.desc}
              onChange={handleChange}
            ></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input 
              type="text" 
              name="shortTitle" 
              placeholder="e.g. One-page web design" 
              onChange={handleChange}
              value={state.shortTitle}
            />
            <label htmlFor="">Short Description</label>
            <textarea 
              name="shortDesc" 
              id="" 
              placeholder="Short description of your service" 
              cols="30" 
              rows="10"
              onChange={handleChange}
              value={state.shortDesc}
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input 
              type="number" 
              name='deliveryTime' 
              value={state.deliveryTime} 
              onChange={handleChange}
            />
            <label htmlFor="">Revision Number</label>
            <input 
              type="number"
              name="revisionNumber"
              value={state.revisionNumber}
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form action="" className="add" onSubmit={handleFeatures}>
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">add</button>
            </form>

            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add