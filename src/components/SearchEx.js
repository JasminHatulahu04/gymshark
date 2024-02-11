import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function SearchEx() {
    const [list, SetList] = useState()

    useEffect(() => {
        axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
        headers: {
        'X-RapidAPI-Key':  '93cd6d2512msh68c0e206f2eece8p11d524jsn6ac59bf06c72',
        'X-RapidAPI-Host' : 'exercisedb.p.rapidapi.com'
        }
        }).then( response => {
            if(response.status === 200) {
                SetList(response.data)
            }
        })
        .catch(err => console.log(err));
        console.log(SetList)
    }, [])

    const handleSearch = e => {
        switch(e.keyCode) {
            case 13:
            SetList(e.target.value)
            break
        }
    }
  return (
    <Container className='my-5'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <h4 className='mb-5'>Awesoome Exercises You Should Know</h4>
            </div>
            <div style={{width:'35%'}}>
                <input type="text" style={{height:'50px'}} placeholder='Search your exercise' onKeyUp={handleSearch}  className='form-control' />
            </div>
        </div>
    </Container>
  )
}

export default SearchEx