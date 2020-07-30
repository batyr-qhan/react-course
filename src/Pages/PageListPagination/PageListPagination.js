import React from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'
import PropTypes from 'prop-types'
import qs from 'qs'
import Button from 'react-bootstrap/Button'

function PageListPagination (props) {
  const { location } = props
  const page = +qs.parse(location.search, { ignoreQueryPrefix: true }).page || 0
  console.log(page)

  function handlePageClick ({ selected }) {
    const fixedSelected = selected + 1
    const { history, location } = props

    // console.log('historu it is', history)
    // console.log('location it is', location)

    const checkSelected = (value) => (value === 1) ? null : value

    const params = { page: checkSelected(fixedSelected) }
    const updateSearch = { ...qs.parse(location.search, { ignoreQueryPrefix: true }), ...params }
    history.push(`${location.pathname}${qs.stringify(updateSearch, { addQueryPrefix: true, skipNulls: true })}`)
  }

  function handleButtonClick () {
    const { history, location } = props
    // const id = +qs.parse(location.search, { ignoreQueryPrefix: true }).id
    console.log(history)

    const params = { id: 1 }

    const updateSearch = { ...qs.parse(location.search, { ignoreQueryPrefix: true }), ...params }
    history.push(`${location.pathname}${qs.stringify(updateSearch, { addQueryPrefix: true, skipNulls: true })}`)
  }

  const options = {
    request: {
      url: 'pageList.json',
      params: {
        page
      }
    },
    reducerKey: 'PageListPaginationUrl'
  }

  return (
    <>
      <h1>Список с пагинцией</h1>
      <RemoteDataProvider {...options}>
        {({ response: { data, totalPages } }) => {
          return (
            <>
              <ListGroup>
                {data.map(({ title, description, code }, key) => (
                  <ListGroup.Item key={key} as={Link} to={`/list/${code}`}>
                    <h3>{title}</h3>
                    <div>{description}</div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Pagination
                initialPage={page}
                pageCount={totalPages}
                handlePageClick={handlePageClick}
              />
              <Button onClick={handleButtonClick}>Добавить id=1</Button>
            </>
          )
        }}
      </RemoteDataProvider>
    </>
  )
}

PageListPagination.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
}

export default PageListPagination
