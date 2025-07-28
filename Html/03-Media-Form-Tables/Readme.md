# Multimedia & Form HTML Practice

This HTML file demonstrates embedding multimedia content, creating interactive user forms, and presenting tabular data using semantic and accessible HTML5 elements.

---

## File: `03-Media-Form-Scores.html`

---

## Media Elements

### YouTube Video Embed (`<iframe>`)

- Embeds an external YouTube video directly into the page using the `<iframe>` tag.
- The `src` attribute points to the YouTube video URL, allowing streaming without downloading.
- The `allow` attribute enables features such as autoplay, encrypted media, clipboard access, picture-in-picture, and fullscreen.
- `frameborder="0"` removes the default border around the iframe.
- The `title` attribute improves accessibility by describing the embedded content for screen readers.
- Width and height attributes define the size of the video player.

### Local Video Player (`<video>`)

- Uses the `<video>` tag to play a local MP4 video file.
- The `src` attribute points to the local video file.
- `controls` attribute enables native browser video controls like play, pause, volume, and fullscreen toggling.
- `width` attribute defines the player width.
- Offers a fallback in case the embedded YouTube video is not accessible.

---

## Form Elements

### Text Input (`<input type="text">`)

- Captures user's name.
- Uses the `placeholder` attribute to guide users on what to enter.
- Wrapped with a `<label>` for accessibility.

### Radio Buttons (`<input type="radio">`)

- Allows selection of gender: male or female.
- Both radio buttons share the same `name` attribute to ensure only one can be selected.
- Each has a corresponding `<label>` for clear identification and accessibility.

### Checkboxes (`<input type="checkbox">`)

- Enables multiple hobby selections (e.g., dancing, singing).
- Each checkbox has a unique `id` linked to a `<label>`.
- Allows users to select one or more hobbies.

### Textarea (`<textarea>`)

- Provides a multi-line input area for users to introduce themselves.
- The `placeholder` attribute offers an example prompt.
- `cols` and `rows` specify the visible size of the textarea.

### Dropdown Select (`<select>`)

- Presents a list of predefined car options.
- Users can select one car from options like Brezza, Harrier, or Creta.
- The first option prompts users to select a car.

### Form Submission

- The form uses the `GET` method to send data to a server-side script (`form.php`).
- Proper use of labels and input associations ensures the form is accessible and user-friendly.

---

## Table Elements

### Table Container (`<table>`)

- Displays IPL 2022 player scores in rows and columns.

### Caption (`<caption>`)

- Provides a descriptive title for the table.

### Table Header (`<thead>`)

- Contains header cells describing each column: Player's Name, Score, and Game.
- Helps screen readers identify table structure.

### Table Body (`<tbody>`)

- Contains rows of data with each player's name, score, and game.
- Proper row (`<tr>`) and cell (`<td>`) usage maintains structure and readability.

### Accessibility and Semantics

- Semantic grouping improves the ability of assistive technologies to interpret the table.
- Enhances readability for users and supports SEO best practices.
- The table is static but can be adapted for dynamic data in more advanced use cases.

---
**Made with ❤️ by TEHSEEN MEMON**
