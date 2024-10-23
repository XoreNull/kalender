document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendarBody');
    const currentMonthDisplay = document.getElementById('currentMonth');
    const eventDateInput = document.getElementById('eventDate');
    const eventDescriptionInput = document.getElementById('eventDescription');
    const addEventBtn = document.getElementById('addEventBtn');
    const jumpToDateInput = document.getElementById('jumpToDateInput');
    const jumpToDateBtn = document.getElementById('jumpToDateBtn');
    const eventListContainer = document.getElementById('eventListContainer');
    const eventList = document.getElementById('eventList');
  
    let selectedDate;
  
    function renderCalendar(year, month) {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const currentDay = now.getDate(); // Get the current day
      
        const monthNames = [
          "January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"
        ];
      
        currentMonthDisplay.textContent = monthNames[month] + ' ' + year;
      
        // Clear previous content
        calendarBody.innerHTML = '';
      
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const startingDay = firstDayOfMonth.getDay();
      
        let day = 1;
        for (let i = 0; i < 6; i++) {
          const row = document.createElement('tr');
          for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
              const cell = document.createElement('td');
              row.appendChild(cell);
            } else if (day > daysInMonth) {
              break;
            } else {
              const cell = document.createElement('td');
              cell.textContent = day;
              cell.dataset.date = dateStr;
              if (dateStr === selectedDate) {st.add('selected');
              }
              if (year === currentYear && month === currentMonth && day === currentDay) {
                cell.classList.add('current-day'); // Apply the class for the current day
              }
                cell.classLi
              row.appendChild(cell);
              day++;
            }
          }
          calendarBody.appendChild(row);
        }
      }
      
  
    function addEvent() {
        const eventDate = eventDateInput.value;
        const eventDescription = eventDescriptionInput.value;
      
        if (!eventDate || !eventDescription) {
          alert('Please select a date and enter a description for the event.');
          return;
        }
      
        // Simulate storing the event
        // Instead of alerting, we'll directly add the event to the event list
        const li = document.createElement('li');
        li.textContent = `${eventDate}: ${eventDescription}`;
        eventList.appendChild(li);
      
        // Clear input fields after adding the event
        eventDateInput.value = '';
        eventDescriptionInput.value = '';
      }
      
      
  
    function handleCellClick(event) {
        const target = event.target;
        if (target.tagName === 'TD') {
          const dateStr = target.dataset.date;
          if (dateStr) {
            selectedDate = dateStr;
            document.querySelectorAll('#calendarBody td').forEach(cell => {
              cell.classList.remove('selected');
            });
            target.classList.add('selected');
            updateEventList(dateStr); // Update event list when a date is clicked
          }
        }
      }
      
  
    function jumpToDate() {
      const date = jumpToDateInput.value;
      if (!date) {
        alert('Please select a date.');
        return;
      }
      const [year, month, day] = date.split('-');
      renderCalendar(parseInt(year), parseInt(month) - 1);
      updateEventList(date);
    }
  
    function updateEventList(date) {
        eventList.innerHTML = ''; // Clear previous event list items
        // Simulated events
        const events = [
          { date: '2024-04-01', description: 'Event 1' },
          { date: '2024-04-05', description: 'Event 2' },
          { date: '2024-04-10', description: 'Event 3' }
        ];
        events.forEach(event => {
          if (event.date === date) {
            const li = document.createElement('li');
            li.textContent = event.description;
            eventList.appendChild(li);
          }
        });
      }
      
      
  
    addEventBtn.addEventListener('click', addEvent);
    calendarBody.addEventListener('click', handleCellClick);
    jumpToDateBtn.addEventListener('click', jumpToDate);
  
    // Get current date and render calendar
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    renderCalendar(currentYear, currentMonth);
  });
  