<div >
  <label>
    <input
      style={{display: 'none'}}
      type='file'
      accept="image/*"
      capture="environment"
      onChange={this.handleImageChange}
     />
    <YourCustomButton/>
  </label>
</div>
Handler:

handleImageChange = (event) => {
  this.setState({
    image: URL.createObjectURL(event.target.files[0])
  })
}
