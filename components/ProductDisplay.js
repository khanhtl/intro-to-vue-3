app.component('productDisplay', {
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <ul>
              <li v-for="detail in details">
                {{ detail }}
              </li>
            </ul>
            <div class="color-circle" :style="{background: variant.color}" v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"></div>
            <button class="button" @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
            <review-form @rating="addReview"></review-form>
          </div>
        </div>
      </div>
    `,
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart');
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0;
        },
        shipping() {
          if(this.premium) {
            return 'Free'
          }
          return '$2.99'
        },
        addReview(review) {
          this.reviews.push(review)
        }
    },
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    }
})