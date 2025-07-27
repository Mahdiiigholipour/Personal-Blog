document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.compact-form");
  const dateInput = document.getElementById("date");
  const hiddenTimestamp = document.getElementById("publishingDate");

  if (form && dateInput && hiddenTimestamp) {
    form.addEventListener("submit", function () {
      const dateValue = dateInput.value;
      if (dateValue) {
        const timestamp = new Date(dateValue).getTime(); // in ms
        hiddenTimestamp.value = timestamp;
      }
    });
  }
});
