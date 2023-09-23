import moment from "moment"
import React, { useEffect, useState } from "react"
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa"
// import Loader from "~/components/reuseable/Loader"
import { baseUrl } from "~/repositories/Repository"
import dynamic from 'next/dynamic'

const Loader = dynamic(
  () => import("~/components/reuseable/Loader"),
  {loading: ()=> <p>Loading...</p>}
)

function UpcomingEvents({ currentEvent }) {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    console.log("Upcoming Events")
    getEvents()
  }, [currentEvent])
  const getEvents = async () => {
    setIsLoading(true)
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({ currentEvent })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const response = await fetch(
      baseUrl + "/api/events/getUpcomingEvents",
      requestOptions
    )
    const eventsList = await response.json()
    setIsLoading(false)
    if (eventsList.status === 200) {
      setEvents(eventsList.data)
    } else {
      setEvents(eventsList.data)
    }
  }

  return events && events.length > 0 ? (
    <div>
      <h2>Upcoming Events</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="about-section">
          <div className="container">
            <div className="row">
              {events.length === 0 ? (
                <div className="col-md-12 border-dark">
                  <h3>No Upcoming Events</h3>
                </div>
              ) : null}
              {events &&
                events.map((data, key) => (
                  <div className="col-md-4" key={key}>
                    <a href={`/events/details/${data.slug}`}>
                      <div className="card p-1">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <img
                              src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                              alt={data.title}
                            />
                            <h3 className="  mt-3">{data.title}</h3>
                            <div className="d-flex m-2">
                              <FaCalendarAlt size={20} className="mr-3" />
                              <p>
                                {moment(data.date).format("dddd, DD-MM-YYYY")}{" "}
                                {moment(data.date).format("MMMM")}@{" "}
                                {data.timing}
                              </p>
                            </div>
                            <div className="d-flex m-2">
                              <FaLocationArrow size={20} className="mr-3" />
                              <p>{data.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  ) : null
}

export default UpcomingEvents
