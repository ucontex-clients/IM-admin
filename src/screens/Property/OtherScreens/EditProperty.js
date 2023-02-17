import React from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Right from '../../../assests/images/icons/right.png'
import Back from '../../../assests/images/icons/Back.png'
import Add from '../../../assests/images/icons/addp.png'
import Layout from '../../../components/layout'
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'

export default function EditProperty() {
  const navigate = useNavigate()
  const [firstImage, setFirstImage] = React.useState('')
  const [show, setShow] = React.useState(true)
  const [selectedFiles, setSelectedFiles] = React.useState([])
  const [imageFiles, setImageFiles] = React.useState([])

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      )
      const fileName = Array.from(e.target.files).map((file) => file)

      setImageFiles((prevImages) => prevImages.concat(fileName))
      setSelectedFiles((prevImages) => prevImages.concat(filesArray))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      )
    }
  }

  function handleRemove(id, file) {
    const newList = selectedFiles.filter((item) => item !== id)
    const clone = [...imageFiles]
    const index = clone.indexOf(file)
    clone.splice(index, 1)
    setImageFiles(clone)
    if (Object.keys(newList).length === 0) {
      setShow((prev) => !prev)
    }
    setSelectedFiles(newList)
  }

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return <div key={index}>{files(index, photo)}</div>
    })
  }

  const files = (index, photo) => {
    if (index < 5) {
      return (
        <div
          key={index}
          className=" bg-secondary p-px w-40 h-40 rounded-md mx-2"
        >
          <div
            style={{
              backgroundImage: 'url(' + photo + ')',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              display: 'flex',
              backgroundPosition: 'center',
              borderRadius: '5px',
            }}
          >
            <div className="w-full flex flex-1" />
            {/* <div onClick={() => handleRemove(photo, imageFiles[index])} className=' flex justify-center items-center bg-secondary  cursor-pointer mt-1 mr-1 rounded-full' > */}
            <svg
              onClick={() => handleRemove(photo, imageFiles[index])}
              className=" flex justify-center items-center bg-secondary  cursor-pointer mt-1 mr-1 rounded-full"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0C6.01664 0 4.56659 0.439867 3.33323 1.26398C2.09986 2.08809 1.13856 3.25943 0.570907 4.62987C0.00324961 6.00032 -0.145275 7.50832 0.144114 8.96317C0.433503 10.418 1.14781 11.7544 2.1967 12.8033C3.2456 13.8522 4.58197 14.5665 6.03682 14.8559C7.49168 15.1453 8.99968 14.9968 10.3701 14.4291C11.7406 13.8614 12.9119 12.9001 13.736 11.6668C14.5601 10.4334 15 8.98336 15 7.5C15 5.51087 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48913 0 7.5 0ZM11.25 10.3594C11.3743 10.4837 11.4442 10.6523 11.4442 10.8281C11.4442 11.0039 11.3743 11.1726 11.25 11.2969C11.1257 11.4212 10.9571 11.491 10.7813 11.491C10.6054 11.491 10.4368 11.4212 10.3125 11.2969L7.5 8.48437L4.6875 11.3062C4.62595 11.3678 4.55287 11.4166 4.47244 11.4499C4.39201 11.4833 4.30581 11.5004 4.21875 11.5004C4.1317 11.5004 4.0455 11.4833 3.96507 11.4499C3.88464 11.4166 3.81156 11.3678 3.75 11.3062C3.68845 11.2447 3.63962 11.1716 3.6063 11.0912C3.57299 11.0108 3.55584 10.9246 3.55584 10.8375C3.55584 10.7504 3.57299 10.6642 3.6063 10.5838C3.63962 10.5034 3.68845 10.4303 3.75 10.3687L6.5625 7.5375L3.67031 4.62187C3.54599 4.49755 3.47615 4.32894 3.47615 4.15312C3.47615 3.97731 3.54599 3.80869 3.67031 3.68437C3.79464 3.56005 3.96325 3.49021 4.13906 3.49021C4.31488 3.49021 4.48349 3.56005 4.60781 3.68437L7.5 6.60937L10.3922 3.71719C10.4537 3.65563 10.5268 3.6068 10.6073 3.57349C10.6877 3.54017 10.7739 3.52302 10.8609 3.52302C10.948 3.52302 11.0342 3.54017 11.1146 3.57349C11.1951 3.6068 11.2681 3.65563 11.3297 3.71719C11.3912 3.77874 11.4401 3.85182 11.4734 3.93225C11.5067 4.01268 11.5239 4.09888 11.5239 4.18594C11.5239 4.27299 11.5067 4.35919 11.4734 4.43962C11.4401 4.52005 11.3912 4.59313 11.3297 4.65469L8.4375 7.5375L11.25 10.3594Z"
                fill="#FF1212"
              />
            </svg>
            {/* </div>                     */}
          </div>
        </div>
      )
    } else {
      selectedFiles.pop()
      imageFiles.pop()
    }
  }

  return (
    <Layout>
      <Box sx={{ p: 5, width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className=" flex items-center ">
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ">
              Property
            </p>
            <img src={Right} alt="right" className=" mr-5 " />
            <p className=" font-Inter-Bold text-[15px] mr-5 ">Edit</p>
            <img src={Right} alt="right" className=" mr-5 " />
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#2E3A59] ">
              Norah’s Court Estate
            </p>
          </div>
          <Box sx={{ width: '30%' }}>
            <TextField
              placeholder="Search Property and User"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 10,
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ p: 6 }}>
          <Typography variant="h6" sx={{ pb: 5, fontWeight: 800 }}>
            Edit Norah's Court
          </Typography>
          <Box sx={{ width: '70%' }}>
            <Box sx={{ pb: 4 }}>
              <Typography variant="body1">Name of property</Typography>
              <TextField fullWidth />
            </Box>
            <Box sx={{ pb: 4 }}>
              <Typography variant="body1">Description</Typography>
              <TextField fullWidth multiline rows={4} />
            </Box>
            <Box sx={{ pb: 4 }}>
              <Typography variant="body1">Location</Typography>
              <Grid container spacing={1}>
                <Grid item md={4}>
                  <TextField fullWidth select>
                    <MenuItem>Nigeria</MenuItem>
                  </TextField>
                </Grid>
                <Grid item md={4}>
                  <TextField fullWidth select>
                    <MenuItem>Rivers</MenuItem>
                  </TextField>
                </Grid>
                <Grid item md={4}>
                  <TextField fullWidth select>
                    <MenuItem>Obio/Akpor</MenuItem>
                  </TextField>
                </Grid>
                <Grid item md={6}>
                  <TextField fullWidth />
                </Grid>
                <Grid item md={6}>
                  <TextField fullWidth />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ pb: 4 }}>
              <Typography variant="body1">Features</Typography>
              <TextField fullWidth />
            </Box>
          </Box>
          <Typography variant="h6" sx={{ pb: 5, fontWeight: 800, pt: 4 }}>
            Media
          </Typography>
          <Box sx={{ width: '70%' }}>
            <Box sx={{ pb: 4 }}>
              <Typography variant="body1">Upload Photo</Typography>
              <TextField fullWidth onChange={handleImageChange} type="file" />
              <p className=" text-[15px] font-Inter-Regular text-blue-500 ">
                First photo would be the display photo{' '}
              </p>
              <div className=" flex items-center mt-6 ">
                <label className=" w-[25px] h-[25px] ] rounded-full  ">
                  <img
                    src={Add}
                    className=" w-full h-full object-cover "
                    alt="add"
                  />
                  <input
                    style={{ display: 'none', width: '100%', height: '100%' }}
                    type="file"
                    id="file"
                    multiple
                    onChange={handleImageChange}
                  />
                </label>
                <p className=" font-Inter-Regular ml-3 ">Add more photos</p>
              </div>
              <div className=" flex w-full overflow-x-auto ">
                {renderPhotos(selectedFiles)}
              </div>
            </Box>
            <Box sx={{ pb: 4 }}>
              <Typography variant="body1">Upload Video</Typography>
              <TextField fullWidth type="file" />
            </Box>
          </Box>
          <Box sx={{ width: '70%', border: '1px solid #9BA49E' }}>
            <Box sx={{ width: '70%', p: 3 }}>
              <Typography variant="h6" sx={{ pb: 3, fontWeight: 700, pt: 1 }}>
                Property Layout
              </Typography>
              <Box sx={{ pb: 4 }}>
                <Typography variant="body1">Upload Layout Photo</Typography>
                <TextField fullWidth type="file" />
              </Box>
              <Box sx={{ pb: 4 }}>
                <Typography variant="body1">Price per square meter</Typography>
                <TextField fullWidth />
              </Box>
            </Box>

            <Box sx={{ width: '80%', pl: 3 }}>
              <Typography variant="h6">Property Layout details</Typography>
              <Box
                sx={{
                  width: '90%',
                  p: 3,
                  border: '1px solid #9BA49E',
                  borderRadius: 2,
                }}
              >
                <Box sx={{ pb: 4 }}>
                  <Typography variant="body1">Title</Typography>
                  <TextField fullWidth />
                </Box>
                <Box sx={{ pb: 4 }}>
                  <Typography variant="body1">Measurement</Typography>
                  <Grid container spacing={1}>
                    <Grid item md={6}>
                      <Typography variant="body1">Length</Typography>
                      <TextField fullWidth />
                    </Grid>
                    <Grid item md={6}>
                      <Typography variant="body1">Width</Typography>
                      <TextField fullWidth />
                    </Grid>
                  </Grid>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}
                  >
                    <button
                      type="button"
                      class="inline-block px-36 py-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Add Layout
                    </button>
                  </Box>
                </Box>
              </Box>
              <div className=" flex items-center mt-6 mb-6 ">
                <label className=" w-[25px] h-[25px] ] rounded-full  ">
                  <img
                    src={Add}
                    className=" w-full h-full object-cover "
                    alt="add"
                  />
                  {/* <input
                    style={{ display: 'none', width: '100%', height: '100%' }}
                    type="file"
                    id="file"
                    multiple
                    onChange={handleImageChange}
                  /> */}
                </label>
                <p className=" font-Inter-Regular ml-3 ">Add more Layouts</p>
              </div>
              <Box
                sx={{ display: 'flex', justifyContent: 'center', pt: 3, pb: 3 }}
              >
                <button
                  type="button"
                  class="inline-block px-36 py-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Save
                </button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3,
              pb: 3,
              width: '60%',
            }}
          >
            <button
              type="button"
              class="inline-block px-36 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Publish
            </button>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
