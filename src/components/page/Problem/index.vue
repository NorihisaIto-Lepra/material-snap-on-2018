<template>
  <v-card class="mt-1">
    <v-img
      :src="imgSrc"
      max-height="16vh"
      position="top center"
      gradient="to top left, rgba(0,0,0,.20), rgba(0,0,50,.80)"
    >
      <v-container
        fill-height
        fluid
        pa-2
      >
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text" v-text="'問題点'"></span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <div>
        <span v-html="titleText"/>
      </div>
    </v-card-title>

    <v-card-text>
      <v-layout row justify-space-between >
        <v-flex xs3>
          <v-card class="secondary darken-1 mt-1 problem-cards">
            <v-container
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <span v-html="'<h1>長いガイドライン、英語オンリー</h1>'"/>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex xs3>
          <v-card class="secondary darken-1 mt-1 problem-cards">
            <v-container
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <span v-html="'<h1>UXが解決するわけではない</h1>'"/>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex xs3>
          <v-card class="secondary darken-1 mt-1 problem-cards">
            <v-container
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <span v-html="'<h1>日本語の推奨フォントがツマラン</h1>'"/>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex xs3>
          <v-card class="secondary darken-1 mt-1 problem-cards">
            <v-container
              fluid
              grid-list-md
            >
            <v-layout row wrap>
              <span v-html="'<h1>似たようなデザインになりがち</h1>'"/>
            </v-layout>
            </v-container>
          </v-card>
        </v-flex>


      </v-layout>
    </v-card-text>
  </v-card>

</template>