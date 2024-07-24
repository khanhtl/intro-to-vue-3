app.component('review-form', {
    template:
        /*html*/
        `
    <form class="review-form" @submit.prevent="submitForm">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select name="rating" id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit" />
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        submitForm() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            thí.$emit('rating', productReview)
        }
    }
})