<template>
<div class="mdl-grid request-max-width chiammo-request">
    <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Request a book</h2>
        </div>
        <div class="mdl-card__media">
            <img class="article-image" src="../assets/images/contact-image.jpg" border="0" alt="">
        </div>
        <div class="mdl-card__supporting-text">
            <p>
                To request a book, fill out the form below and we'll try our best to find the best deal for you.
            </p>
            <form class="" @submit.prevent="submitForm">
                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">A little about you...</h3>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input v-model="name" class="mdl-textfield__input" pattern="^(?!\s*$).+" type="text" id="Name">
                    <label class="mdl-textfield__label" for="Name">Name (required)</label>
                    <span class="mdl-textfield__error">Required</span>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input v-model="email" class="mdl-textfield__input" pattern="\S+@\S+\.\S+" type="email" id="Email">
                    <label class="mdl-textfield__label" for="Email">Email (required)</label>
                    <span class="mdl-textfield__error">Invalid Email</span>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input v-model="schoolname" class="mdl-textfield__input" pattern="^(?!\s*$).+" type="text" id="schoolname">
                    <label class="mdl-textfield__label" for="schoolname">School Name (required)</label>
                    <span class="mdl-textfield__error">Required</span>
                </div>

                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Books:</h3>
                <table
                  v-show="books.length"
                  class="mdl-cell mdl-cell--12-col mdl-data-table mdl-js-data-table mdl-shadow--2dp"
                >
                  <thead>
                    <tr>
                      <th class="mdl-data-table__cell--non-numeric">Title</th>
                      <th class="mdl-data-table__cell--non-numeric">Author</th>
                      <th class="mdl-data-table__cell--non-numeric">ISBN</th>
                      <th class="mdl-data-table__cell--non-numeric">Note</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="book in books">
                      <td class="mdl-data-table__cell--non-numeric">{{ book.title }}</td>
                      <td class="mdl-data-table__cell--non-numeric">{{ book.author }}</td>
                      <td class="mdl-data-table__cell--non-numeric">{{ book.isbn }}</td>
                      <td class="mdl-data-table__cell--non-numeric">{{ book.note }}</td>
                      <td>
                        <button
                          class="mdl-button mdl-js-button mdl-button--icon"
                          title="delete"
                          @click.prevent="deleteBook($index)"
                        >
                          <i class="material-icons">close</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div v-el:title class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input v-model="currentBook.title" class="mdl-textfield__input" pattern="^(?!\s*$).+" type="text" id="Title">
                    <label class="mdl-textfield__label" for="Title">Title (required)</label>
                    <span class="mdl-textfield__error">Required</span>
                </div>
                <div v-el:author class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input v-model="currentBook.author" class="mdl-textfield__input" pattern="^(?!\s*$).+" type="text" id="Author">
                    <label class="mdl-textfield__label" for="Author">Author (optional, but recommended)</label>
                </div>
                <div v-el:isbn class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input v-model="currentBook.isbn" class="mdl-textfield__input" type="text" id="ISBN">
                    <label class="mdl-textfield__label" for="ISBN">ISBN (optional)</label>
                </div>
                <div v-el:note class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <textarea v-model="currentBook.note" class="mdl-textfield__input" type="text" rows="3" id="Note"></textarea>
                    <label class="mdl-textfield__label" for="Note">Notes (optional)</label>
                </div>

                <button
                  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                  @click.prevent="addBook"
                >
                    Add
                </button>
                <p>
                    <button
                      v-show="books.length"
                      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                      type="submit"
                    >
                        Submit {{ this.books.length.toString() }} {{ this.books.length === 1 ? 'book' : 'books' }}
                    </button>
                </p>
                <pre>{{ $data | json }}</pre>
            </form>
            <p>
                **We are in the works, bear with us while we find you the best price.
            </p>
            <p>
                Go catch Pokemon in the meantime😉
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      books: [],
      name: '',
      email: '',
      schoolname: '',
      currentBook: {
        title: '',
        author: '',
        isbn: '',
        note: ''
      }
    }
  },
  methods: {
    deleteBook (idx) {
      this.books.splice(idx, 1)
    },
    addBook () {
      this.books.push(this.currentBook)
      this.currentBook = { title: '', author: '', isbn: '', note: '' }
      this.$els.title.MaterialTextfield.change('')
      this.$els.author.MaterialTextfield.change('')
      this.$els.isbn.MaterialTextfield.change('')
      this.$els.note.MaterialTextfield.change('')
    },
    submitForm () {
      console.log(this.books)
    }
  }
}
</script>
<style>
img.article-image {
  width: 100%;
  height: auto;
}

.request-max-width {
  max-width: 900px;
  margin: auto;
}

.about-copy {
  max-width: 700px;
}

.chiammo-request .mdl-textfield {
  width: 100%;
}

.chiammo-request form {
  max-width: 550px;
  margin: auto;
}

</style>
