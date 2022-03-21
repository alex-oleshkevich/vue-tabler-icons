<script lang="ts">
import * as icons from 'vue-tabler-icons';
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            color: 'black',
            strokeWidth: '2',
        };
    },
    computed: {
        icons() {
            return icons;
        },
    },
    methods: {
        tagName(name:any) {
            return name
                .replace(/[A-Z]/g, (m:any) => '-' + m.toLowerCase())
                .substring(1);
        },
    },
});
</script>

<template>
<div>
        <link
            href="//unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
        />
        <div class="container mx-auto pb-5">
            <div class="p-3 mb-5 flex items-center">
                <label class="flex items-center mr-5">
                    Color
                    <input type="color" v-model="color" />
                </label>
                <label class="flex items-center mr-5">
                    Stroke Width
                    <input
                        type="range"
                        v-model="strokeWidth"
                        step="1"
                        min="1"
                        max="10"
                    />
                </label>
            </div>
            <div class="grid grid-cols-6 gap-5">
                <div
                    class="shadow border border-gray-100 rounded p-5"
                    :key="name"
                    :title="tagName(name)"
                    v-for="(component, name) in icons"
                >
                    <div class="flex items-center justify-center">
                        <component
                            size="32"
                            :stroke-width="strokeWidth"
                            :is="component"
                            :style="{ color }"
                        />
                    </div>
                    <div class="text-sm text-center mt-3">
                        {{ tagName(name) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
