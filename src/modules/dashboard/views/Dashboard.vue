<template>
  <AppNavbar />
  <div class="container">
    <section class="section">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <h2 class="subtitle">최근 등록 숙제</h2>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <a class="button is-small" disabled>
                  <i class="far fa-chevron-left" />
                </a>
              </div>
              <div class="control">
                <a class="button is-small">
                  <i class="far fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <article>
            <figure class="image is-5by3">
              <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
            </figure>
            <h2 class="subtitle">Creating a Group</h2>
            <span class="tag is-rounded">Users & Groups</span>
          </article>
        </div>
        <div class="column is-3">
          <article>
            <figure class="image is-5by3">
              <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
            </figure>
            <h2 class="subtitle">Downloading/Printing Your Invoices</h2>
            <span class="tag is-rounded">Billing & Accounts</span>
          </article>
        </div>
        <div class="column is-3">
          <article>
            <figure class="image is-5by3">
              <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
            </figure>
            <h2 class="subtitle">Changing the Account Owner</h2>
            <span class="tag is-rounded">Billing & Accounts</span>
          </article>
        </div>
        <div class="column is-3">
          <article>
            <figure class="image is-5by3">
              <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
            </figure>
            <h2 class="subtitle">Adding Internal Notes</h2>
            <span class="tag is-rounded">Billing & Accounts</span>
          </article>
        </div>
      </div>
      <section class="categories">
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="category">
              <h1 class="title is-5">
                클래스 리스트 <span>5 articles</span>
              </h1>
              <hr />
              <ul>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  General Billing Overview
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  Changing the Account Owner
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  Downloading/Printing Your Invoices
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  Downloading/Printing Your Invoices
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  What to Do When Your Card is Declined
                </li>
              </ul>
              <h3 class="category-more">View All <i class="far fa-arrow-right icon-padding-left" /></h3>
            </div>
          </div>
          <div class="column is-6">
            <div class="category">
              <h1 class="title is-5">
                최근 등록 시험 성적 <span>7 articles</span>
              </h1>
              <hr />
              <ul>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  Why Isn't My Custom Profile Data Showing on My Tickets?
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  Why Won't My Gmail SMTP Settings Work?
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  Is There a Customer Portal My Users Can Log in To?
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  How Do I Export My Contacts, Tickets, Reports?
                </li>
                <li>
                  <i class="fas fa-caret-right fa-xs icon-padding-right" />
                  How Do I Search for a Number?
                </li>
              </ul>
              <h3 class="category-more">View All <i class="far fa-arrow-right icon-padding-left" /></h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  name: "Dashboard",
  inheritAttrs: false,
  components: {
    AppNavbar,
    AppFooter
  }
})
</script>

<style scoped>

</style>
