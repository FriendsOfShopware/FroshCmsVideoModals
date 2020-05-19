import template from './extension/sw-cms-el-config-youtube-video.html.twig';

const {Component, Mixin} = Shopware;

Component.override('sw-cms-el-config-youtube-video', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            mediaModalIsOpen: false,
            initialFolderId: null
        };
    },

    inject: ['repositoryFactory'],

    props: {
        uploadTag: {
            type: String,
            required: true
        },
    },

    created() {
        this.createdComponent();
    },
    methods: {
        createdComponent() {
            this.initElementConfig('youtube-video');
            if(!this.element.config.previewImage ) {
                    this.element.config.previewImage = {
                    source: 'static',
                    value: null,
                    entity: {
                        name: 'media'
                    }
                };
            }
        },

        async onImageUpload({targetId}) {
            const mediaEntity = await this.mediaRepository.get(targetId, Shopware.Context.api);

            this.element.config.previewImage.value = mediaEntity.id;

            this.updateElementData(mediaEntity);

            this.$emit('element-update', this.element);
        },

        onImageRemove() {
            this.element.config.previewImage.value = null;

            this.updateElementData();

            this.$emit('element-update', this.element);
        },

        onCloseModal() {
            this.mediaModalIsOpen = false;
        },

        onSelectionChanges(mediaEntity) {
            const media = mediaEntity[0];
            this.element.config.previewImage.value = media.id;

            this.updateElementData(media);

            this.$emit('element-update', this.element);
        },

        updateElementData(media = null) {
            this.$set(this.element.data, 'previewImageId', media === null ? null : media.id);
            this.$set(this.element.data, 'mediaId', media === null ? null : media.id);
            this.$set(this.element.data, 'previewImage', media);
        },

        onOpenMediaModal() {
            this.mediaModalIsOpen = true;
        },
    },
    computed: {
        mediaRepository() {
            return this.repositoryFactory.create('media');
        },
        uploadTag() {
            return `cms-element-media-config-${this.element.id}`;
        },
        previewImage() {
            if (this.element.data && this.element.data.previewImage && this.element.data.previewImage.id) {
                console.log('jepp data');
                console.log(this.element.data.previewImage);
                return this.element.data.previewImage;
            }
            console.log('jepp config');
            return this.element.config.previewImage.value;
        },
    },
});
