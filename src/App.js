import { useState } from 'react'
import { Storage } from 'aws-amplify';

function App() {
  const [files, setFiles] = useState();
  const [preview, setPreviewImage] = useState(false);
  const [imageStatus, setImageStatus] = useState('Select at least one image to get started.');

  return (
    <div className="App">
      <div>{imageStatus}</div>

      <input type="file" data-testid="image-input" onChange={(e) => {
        setFiles(e.target.files);
        setPreviewImage(true);
      }} multiple/>

      <button onClick={async () => {
        if (files) {
          for (let i = 0; i < files.length; i++){
            const storageResult = await Storage.put(files[i].name, files[i], {
              level: 'public',
              type: 'image/png'
            });
            console.log(storageResult);
          }
          
          setImageStatus('Your images have been uploaded!');
        } else {
          setImageStatus('You must select one or more images before attempting to upload.');
        }
      }}>Upload Images</button>
      
      {preview && (
        <div>
          <label>First image preview</label>
          <img src={URL.createObjectURL(files[0])} alt="Preview" />
        </div>
      )}
      
    </div>
  );
}

export default App;
