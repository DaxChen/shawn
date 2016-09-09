<template>
<div class="mdl-grid chiammo-max-width chiammo-request">
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
            <form @submit.prevent="submitForm">
                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">A little about you...</h3>
                <mdl-textfield
                  type="text"
                  :value.sync="name"
                  floating-label="Name (required)"
                  pattern="^(?!\s*$).+"
                  error="Required"
                >
                </mdl-textfield>
                <mdl-textfield
                  type="email"
                  :value.sync="email"
                  floating-label="Email (required)"
                  pattern="\S+@\S+\.\S+"
                  error="Invalid Email"
                >
                </mdl-textfield>
                <mdl-textfield
                  type="text"
                  :value.sync="schoolname"
                  floating-label="School Name (required)"
                  pattern="^(?!\s*$).+"
                  error="Required"
                >
                </mdl-textfield>

                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Books:</h3>
                <table
                  v-mdl
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
                      <td class="mdl-data-table__cell--non-numeric force-wrap">{{ book.title }}</td>
                      <td class="mdl-data-table__cell--non-numeric force-wrap">{{ book.author }}</td>
                      <td class="mdl-data-table__cell--non-numeric force-wrap">{{ book.isbn }}</td>
                      <td class="mdl-data-table__cell--non-numeric force-wrap">{{ book.note }}</td>
                      <td>
                        <mdl-button
                          @click.prevent="deleteBook($index)"
                          icon="true"
                        >
                          <i class="material-icons">close</i>
                        </mdl-button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5" class="mdl-data-table__cell--non-numeric">
                        <mdl-button
                          raised
                          colored
                          style="width: 100%"
                          class="mdl-js-ripple-effect"
                          @click.prevent="openAddBookDialog"
                        >
                          Click to add a new book
                        </mdl-button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <mdl-dialog
                  v-ref:add-book-dialog
                  v-transfer-dom
                  transition="modal"
                  title="Add a book!"
                  class="modal-fade"
                >
                  <div class="mdl-grid">
                    <mdl-textfield
                      type="text"
                      floating-label="Title (required)"
                      :value.sync="currentBook.title"
                      pattern="^(?!\s*$).+"
                      error="Required"
                      class="mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop"
                    >
                    </mdl-textfield>
                    <mdl-textfield
                      type="text"
                      floating-label="Author (optional, but recommended)"
                      :value.sync="currentBook.author"
                      pattern="^(?!\s*$).+"
                      error="Required"
                      class="mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop"
                    >
                    </mdl-textfield>
                    <mdl-textfield
                      type="text"
                      floating-label="ISBN (optional)"
                      :value.sync="currentBook.isbn"
                      class="mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop"
                    >
                    </mdl-textfield>
                    <mdl-textfield
                      type="text"
                      floating-label="Notes (optional)"
                      :value.sync="currentBook.note"
                      textarea
                      rows="3"
                      class="mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop"
                    >
                    </mdl-textfield>
                  </div>

                  <div slot="actions">
                    <mdl-button
                      raised
                      primary
                      class="mdl-js-ripple-effect"
                      @click.prevent="addBook"
                      :disabled="!validBookInfo"
                    >
                        Add
                    </mdl-button>
                    <mdl-button
                      class="mdl-js-ripple-effect"
                      @click.prevent="$refs.addBookDialog.close"
                    >
                        Close
                    </mdl-button>
                  </div>
                </mdl-dialog>

                <p>
                    <button
                      v-show="books.length"
                      :disabled="!validForm || transferFormState == 1"
                      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                      type="submit"
                    >
                        {{ this.transferFormState === 0
                          ?  `Submit ${this.books.length.toString()} ${this.books.length === 1 ? 'book' : 'books'}`
                          : this.transferFormState === 1 ? 'wait...' : 'done!'
                        }}
                    </button>
                    <span v-if="transferFormState == 2">
                      <i class="material-icons" style="color:green;vertical-align:middle">done</i>
                      Success! Thanks for your request!
                    </span>
                </p>
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
import isEmail from 'validator/lib/isEmail'
import database from 'firebase/database'
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
      },
      transferFormState: 0, // 0: initial, 1: transferring, 2: don, -1: err
    }
  },
  computed: {
    validBookInfo() {
      return this.currentBook.title.trim() !== ''
    },
    validForm() {
      return (
        this.name.trim() !== '' &&
        isEmail(this.email.trim()) &&
        this.schoolname.trim() !== '' &&
        this.books.length > 0
      )
    }
  },
  methods: {
    deleteBook (idx) {
      this.books.splice(idx, 1)
    },
    openAddBookDialog() {
      this.$refs.addBookDialog.open()
    },
    addBook () {
      this.books.push({
        title: this.currentBook.title.trim(),
        author: this.currentBook.author.trim(),
        isbn: this.currentBook.isbn.trim(),
        note: this.currentBook.note.trim()
      })
      this.currentBook = { title: '', author: '', isbn: '', note: '' }
      this.$refs.addBookDialog.close()
    },
    submitForm () {
      const email = this.email.trim()
      const name = this.name.trim()
      const schoolname = this.schoolname.trim()

      this.transferFormState = 1
      database().ref('requests/').push({
        name,
        email,
        schoolname,
        books: this.books
      })
        .then(() => {
          this.books = []
          this.name = ''
          this.email = ''
          this.schoolname = ''
          this.transferFormState = 2
        })
        .catch(err => { console.log(err); this.transferFormState = -1 })
    }
  }
}
</script>
<style>
img.article-image {
  width: 100%;
  height: auto;
}

.chiammo-max-width {
  max-width: 900px;
  margin: auto;
}

.chiammo-request .mdl-textfield {
  width: 100%;
}

.chiammo-request form {
  max-width: 550px;
  margin: auto;
}

.force-wrap {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

.modal-fade {
  transition: all .3s ease;
}

/**
 * http://jsfiddle.net/rhyzx/br5cepu3/
 * the following styles are auto-applied to elements with
 * transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter,
.modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
