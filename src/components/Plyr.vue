<template>
  <video ref="playerRef" v-if="isVideo"></video>
  <audio ref="playerRef" v-if="isAudio"></audio>
</template>

<script setup lang="ts">
import { computed, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
  const props = defineProps<{
    video: {
      [key:string]:any
    }
  }>()
  const videoInfo = computed(() => {
    return props.video
  })
  const isVideo = computed(() => videoInfo.value.mime_type.indexOf('video') !== -1)
  const isAudio = computed(() => videoInfo.value.mime_type.indexOf('audio') !== -1)

  const list:{
    [key:string]: number
  } = {
    '8K': 4320,
    '4K': 2160,
    '1080P': 1080,
    '720P': 720,
    '480P': 480
  }

  const playerRef = ref()
  const player = ref()

  const initPlayer = () => {
    const i18nQualityBadge: any = {
      4320: '8K',
      2160: '4K',
      1440: 'HD',
      1080: 'HD',
      720: 'HD',
      576: 'SD',
      480: 'SD',
    }
    const quality: any = {
      default: 576,
      options: [],
    }
    const source: any = {
      type: '',
      sources: []
    }

    if (isVideo.value) {
      source.type = 'video'
      let originalSize = 0
      let original = ''
      const sizeCounter: any = {}

      videoInfo.value.medias.forEach((v: any) => {
        if (!v.video) {
          return
        }
        let size: number = list[v.resolution_name] || v.video.height
        if (v.media_name === 'Original') {
          originalSize = size
          original = v.resolution_name
        }
        if (sizeCounter[size] === undefined) {
          sizeCounter[size] = 0
        }
        sizeCounter[size]++
      })

      // 如果有原画质量，
      if (originalSize) {
        // 但有相同分辨率的转码质量，Plyr不支持一个分辨率对多个source，要把原画size改为不同的数值
        if (sizeCounter[originalSize] > 1) {
          // 到时候会看到 `1081p - 原画-1080p`, `1080p - HD` 这样的质量菜单，
          // 估计除非修改Plvr，否则做不到完美的显示效果。
          originalSize++
        }
        i18nQualityBadge[originalSize] = '原画-' + original
      }

      videoInfo.value.medias.forEach((v: any) => {
        let size: number = list[v.resolution_name]
        if (v.media_name === 'Original') {
          size = originalSize
        }
        const _source: any = {
          src: v?.link.url,
          type: videoInfo.value.mime_type === 'video/x-matroska' ? 'video/webm' : videoInfo.value.mime_type,
        }
        if (size) {
          _source.size = size
          quality.options.push(size)
        }
        source.sources.push(_source)
      })
    } else if (isAudio.value) {
      source.type = 'audio'
      source.sources.push({
        src: videoInfo.value.web_content_link,
      })
    }

    quality.default = source.sources[0]?.size

    player.value = new Plyr(playerRef.value, {
      debug: true,
      i18n: { qualityBadge: i18nQualityBadge },
      quality,
    })

    // TODO 错误处理
    // 有一个比较麻烦的问题，就是发生error之后，是不能恢复播放的，即使src此时是有效的。
    // 但如果切换到另一个质量，是可能可以正常播放的。
    player.value.on('error', async (event: any) => {
      const instance = event.detail.plyr
      console.warn('error', event)
    })

    source.poster = videoInfo.value.thumbnail_link

    player.value.source = source

    console.log('[source]', source)
  }
  onMounted(initPlayer)
</script>

<style>
.plyr--video {
  height: 100%;
}
.plyr--audio {
  padding: 30vh 10vh;
}
.plyr video {
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

</style>
