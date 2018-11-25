<template>
  <Carousel :imageList="imageList" />
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      imageList:[
        'https://www27.a8.net/svt/bgt?aid=170413844848&wid=002&eno=01&mid=s00000013809001271000&mc=1',
        'http://livedoor.blogimg.jp/kushii_/imgs/b/5/b5879daf.jpg',
        'http://l-s.co.jp/indoorview/blog/wp-content/uploads/sites/3/2016/03/DSC05595-1024x681.jpg'
      ]
    }
  }
}
</script>
