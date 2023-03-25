const weeks = document.querySelectorAll(".week");
const bab = document.querySelector(".main-bab");

weeks.forEach((week) => {
  const clicked = week.textContent;
  week.addEventListener("click", () => {
    // switch case
    switch (clicked) {
      case "Java Script":
        bab.innerHTML = `<a href="pages/js-html/codeStructure.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Code Structure</p></b>
        </div></a
      >

      <a href="pages/js-html/variables.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Variable</p></b>
        </div></a
      >

      <a href="pages/js-html/dataType.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Data Type</p></b>
        </div></a
      >

      <a href="pages/js-html/typeConversion.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Type Conversion</p></b>
        </div></a
      >

      <a href="pages/js-html/operators.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Operators</p></b>
        </div></a
      >

      <a href="pages/js-html/popup.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Pop Up</p></b>
        </div></a
      >

      <a href="pages/js-html/conditional.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Conditional</p></b>
        </div></a
      >

      <a href="pages/js-html/jankenpon.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Jankenpon</p></b>
        </div></a
      >
      
      <a href="pages/js-html/mapping.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Mapping</p></b>
        </div></a
      >
      
      <a href="pages/js-html/todo.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Todo List</p></b>
        </div></a
      >`;
        break;

      case "GIT":
        bab.innerHTML = `<a href="https://adee012.github.io/tugas2-fswd-arkatama/"
          ><div class="task-git heading">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Resume</p></b>
          </div></a
        >`;
        break;

      case "Web Design":
        bab.innerHTML = `<a href="pages/webDesign.html"
        ><div class="task-git heading">
          <i class="fa fa-check" style="font-size: 26px; color: black"></i>
          <b><p>Web Design</p></b>
        </div></a
      >`;
        break;
      case "HTML":
        bab.innerHTML = `<!-- heading dan paragraph -->
        <a href="pages/heading.html"
          ><div class="task-git heading">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Heading dan Paragraph</p></b>
          </div></a
        >

        <!-- Text Formatting -->
        <a href="pages/txtFormating.html"
          ><div class="task-git formatting">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Text Formatting</p></b>
          </div></a
        >

        <!-- List -->
        <a href="pages/list.html"
          ><div class="task-git li-ol">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>List</p></b>
          </div></a
        >

        <!-- Anchor dan Image -->
        <a href="pages/anchor.html"
          ><div class="task-git anchor-image">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Anchor dan Image</p></b>
          </div></a
        >

        <!-- Nota -->
        <a href="pages/note.html"
          ><div class="task-git nota">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Nota Sederhana</p></b>
          </div></a
        >

        <!-- Playlist -->
        <a href="pages/media.html"
          ><div class="task-git HTML1">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Playlist</p></b>
          </div></a
        >

        <!-- Form -->
        <a href="pages/regist.html"
          ><div class="task-git HTML1">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Form Pendaftaran</p></b>
          </div></a
        >

        <!-- Semantic -->
        <a href="pages/semantic.html"
          ><div class="task-git HTML1">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Semantic</p></b>
          </div></a
        >

        <!-- gallery -->
        <a href="pages/galeri.html"
          ><div class="task-git HTML1">
            <i class="fa fa-check" style="font-size: 26px; color: black"></i>
            <b><p>Gallery</p></b>
          </div></a
        >`;
        break;

      case "CSS":
        bab.innerHTML = `<!-- grid -->
          <a href="pages/grid-layout.html"
            ><div class="task-git HTML1">
              <i class="fa fa-check" style="font-size: 26px; color: black"></i>
              <b><p>Grid Layout</p></b>
            </div></a
          >
  
          <!-- flex -->
          <a href="pages/flex-layout.html"
            ><div class="task-git flex">
              <i class="fa fa-check" style="font-size: 26px; color: black"></i>
              <b><p>Flex Layout</p></b>
            </div></a
          >`;
        break;

      default:
        break;
    }
  });
});
