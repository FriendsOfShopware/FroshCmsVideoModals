(this.webpackJsonp=this.webpackJsonp||[]).push([["frosh-cms-video-modals"],{"0c29":function(e,n){e.exports='{% block sw_cms_element_youtube_video_config_display_mode %}\n    {% parent %}\n\n    <sw-button v-if="!previewImage" variant="primary" @click="loadPreviewImage">\n        Vorschaubild importieren\n    </sw-button>\n\n    <sw-container columns="repeat(auto-fit, minmax(250px, 1fr)" gap="0px 30px">\n        <sw-cms-mapping-field :label="$tc(\'sw-media.sidebar.sections.preview\')" valueTypes="entity" entity="media" v-model="element.config.previewImage">\n            <sw-media-upload-v2 variant="regular"\n                                :uploadTag="uploadTag"\n                                :source="previewImage"\n                                :allowMultiSelect="false"\n                                :defaultFolder="cmsPageState.pageEntityName"\n                                :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n                                @media-upload-sidebar-open="onOpenMediaModal"\n                                @media-upload-remove-image="onImageRemove">\n            </sw-media-upload-v2>\n\n            <div class="sw-cms-el-config-image__mapping-preview" slot="preview" slot-scope="{ demoValue }">\n                <img :src="demoValue.url" v-if="demoValue.url">\n                <sw-alert class="sw-cms-el-config-image__preview-info" variant="info" v-else>\n                    {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                </sw-alert>\n            </div>\n        </sw-cms-mapping-field>\n\n\n        <sw-media-modal-v2\n            variant="regular"\n            v-if="mediaModalIsOpen"\n            :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n            :entityContext="cmsPageState.entityName"\n            :allowMultiSelect="false"\n            :initialFolderId="cmsPageState.defaultMediaFolderId"\n            @media-upload-remove-image="onImageRemove"\n            @media-modal-selection-change="onSelectionChanges"\n            @modal-close="onCloseModal">\n        </sw-media-modal-v2>\n\n        <sw-upload-listener\n            :uploadTag="uploadTag"\n            autoUpload\n            @media-upload-finish="onImageUpload">\n        </sw-upload-listener>\n    </sw-container>\n{% endblock %}\n'},"HA/q":function(e,n,t){"use strict";t.r(n);var a=t("0c29"),i=t.n(a);function o(e,n,t,a,i,o,l){try{var m=e[o](l),s=m.value}catch(e){return void t(e)}m.done?n(s):Promise.resolve(s).then(a,i)}var l,m,s=Shopware,r=s.Component,d=s.Mixin;r.override("sw-cms-el-config-youtube-video",{template:i.a,mixins:[d.getByName("cms-element")],data:function(){return{mediaModalIsOpen:!1,initialFolderId:null}},inject:["repositoryFactory"],props:{uploadTag:{type:String,required:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("youtube-video"),this.element.config.previewImage||(this.element.config.previewImage={source:"static",value:null,entity:{name:"media"}})},onImageUpload:(l=regeneratorRuntime.mark((function e(n){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.targetId,e.next=3,this.mediaRepository.get(t,Shopware.Context.api);case 3:a=e.sent,this.element.config.previewImage.value=a.id,this.updateElementData(a),this.$emit("element-update",this.element);case 7:case"end":return e.stop()}}),e,this)})),m=function(){var e=this,n=arguments;return new Promise((function(t,a){var i=l.apply(e,n);function m(e){o(i,t,a,m,s,"next",e)}function s(e){o(i,t,a,m,s,"throw",e)}m(void 0)}))},function(e){return m.apply(this,arguments)}),onImageRemove:function(){this.element.config.previewImage.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onCloseModal:function(){this.mediaModalIsOpen=!1},onSelectionChanges:function(e){var n=e[0];this.element.config.previewImage.value=n.id,this.updateElementData(n),this.$emit("element-update",this.element)},updateElementData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$set(this.element.data,"previewImageId",null===e?null:e.id),this.$set(this.element.data,"mediaId",null===e?null:e.id),this.$set(this.element.data,"previewImage",e)},onOpenMediaModal:function(){this.mediaModalIsOpen=!0},loadPreviewImage:function(){console.log("TODO: ","import image from https://i.ytimg.com/vi/"+this.element.config.videoID.value+"/maxresdefault.jpg")}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},uploadTag:function(){return"cms-element-media-config-".concat(this.element.id)},previewImage:function(){return this.element.data&&this.element.data.previewImage&&this.element.data.previewImage.id?(console.log("previewImage",this.element.config.previewImage),this.element.data.previewImage):(console.log("previewImage.value",this.element.config.previewImage.value),this.element.config.previewImage.value)}}})}},[["HA/q","runtime"]]]);