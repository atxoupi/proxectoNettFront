import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../features/events/eventsSlice';
import { Event } from '../components/event';

export const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const eventsStatus = useSelector((state) => state.events.status);
  const error = useSelector((state) => state.events.error);

  useEffect(() => {
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);

  let content;
if (eventsStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
} else if (eventsStatus === 'succeeded') {
    content = events.data;
    // content = eventsArray.map((event) => <Event key={event.id} event={event} />);
    // content = <div>{JSON.stringify(events)}</div>;
    const eventItems = content.map((item) => <Event key={item.id} id={item.id} />);
    content = <div>{eventItems}</div>;
} else if (eventsStatus === 'failed') {
    content = <div>{error}</div>;
}

  return (
    <section>
      <h2>Events</h2>
      {content}
    </section>
  );
}