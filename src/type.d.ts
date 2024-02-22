export interface Avatar_thumb {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Share_qrcode_url {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Share_info {
	share_url: string;
	share_weibo_desc: string;
	share_desc: string;
	share_title: string;
	share_qrcode_url: Share_qrcode_url;
	share_title_myself: string;
	share_title_other: string;
	share_desc_info: string;
}

export interface Aweme_control {
	can_forward: boolean;
	can_share: boolean;
	can_comment: boolean;
	can_show_comment: boolean;
}

export interface Cover_url {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Search_impr {
	entity_id: string;
}

export interface Author {
	uid: string;
	follower_request_status: number;
	nickname: string;
	familiar_visitor_user?: any;
	display_info?: any;
	white_cover_url?: any;
	avatar_thumb: Avatar_thumb;
	risk_notice_text: string;
	awemehts_greet_info: string;
	link_item_list?: any;
	follow_status: number;
	aweme_count: number;
	following_count: number;
	follower_count: number;
	favoriting_count: number;
	total_favorited: number;
	is_blocked_v2: boolean;
	hide_search: boolean;
	constellation: number;
	live_high_value: number;
	signature_extra?: any;
	weibo_verify: string;
	custom_verify: string;
	user_not_show: number;
	disable_image_comment_saved: number;
	special_lock: number;
	need_recommend: number;
	is_binded_weibo: boolean;
	weibo_name: string;
	weibo_schema: string;
	weibo_url: string;
	story_open: boolean;
	card_entries?: any;
	has_facebook_token: boolean;
	has_twitter_token: boolean;
	fb_expire_time: number;
	tw_expire_time: number;
	has_youtube_token: boolean;
	youtube_expire_time: number;
	is_not_show: boolean;
	live_verify: number;
	endorsement_info_list?: any;
	ban_user_functions: any[];
	shield_follow_notice: number;
	shield_digg_notice: number;
	shield_comment_notice: number;
	special_follow_status: number;
	special_people_labels?: any;
	is_ban: boolean;
	share_info: Share_info;
	offline_info_list?: any;
	aweme_control: Aweme_control;
	user_tags?: any;
	enterprise_verify_reason: string;
	close_friend_type: number;
	not_seen_item_id_list_v2?: any;
	card_sort_priority?: any;
	account_region: string;
	user_not_see: number;
	follower_list_secondary_information_struct?: any;
	live_agreement: number;
	show_nearby_active: boolean;
	with_shop_entry: boolean;
	is_blocking_v2: boolean;
	profile_mob_params?: any;
	has_orders: boolean;
	prevent_download: boolean;
	show_image_bubble: boolean;
	personal_tag_list?: any;
	unique_id_modify_time: number;
	enable_nearby_visible: boolean;
	ins_id: string;
	google_account: string;
	youtube_channel_id: string;
	youtube_channel_title: string;
	apple_account: number;
	with_dou_entry: boolean;
	with_fusion_shop_entry: boolean;
	is_phone_binded: boolean;
	accept_private_policy: boolean;
	twitter_id: string;
	twitter_name: string;
	user_canceled: boolean;
	has_email: boolean;
	is_cf: number;
	live_agreement_time: number;
	status: number;
	create_time: number;
	avatar_uri: string;
	follower_status: number;
	neiguang_shield: number;
	not_seen_item_id_list?: any;
	cf_list?: any;
	reflow_page_gid: number;
	reflow_page_uid: number;
	user_rate: number;
	im_role_ids?: any;
	download_prompt_ts: number;
	react_setting: number;
	live_commerce: boolean;
	cover_url: Cover_url[];
	avatar_schema_list?: any;
	has_insights: boolean;
	share_qrcode_uri: string;
	search_impr: Search_impr;
	user_mode: number;
	user_period: number;
	max_follower_count: number;
	interest_tags?: any;
	user_permissions?: any;
	cv_level: string;
	ky_only_predict: number;
	data_label_list?: any;
	verification_permission_ids?: any;
	contrail_list?: any;
	text_extra?: any;
	card_entries_not_display?: any;
	contacts_status: number;
	sec_uid: string;
	need_points?: any;
	homepage_bottom_toast?: any;
	aweme_hotsoon_auth: number;
	aweme_hotsoon_auth_relation: number;
	can_set_geofencing?: any;
}

export interface Cover_hd {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Cover_large {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Cover_medium {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Cover_thumb {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Play_url {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_key: string;
}

export interface Strong_beat_url {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Avatar_thumb {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Avatar_medium {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Avatar_large {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Search_impr {
	entity_id: string;
}

export interface Luna_info {
	is_luna_user: boolean;
}

export interface Music {
	id: number;
	id_str: string;
	title: string;
	author: string;
	album: string;
	cover_hd: Cover_hd;
	cover_large: Cover_large;
	cover_medium: Cover_medium;
	cover_thumb: Cover_thumb;
	play_url: Play_url;
	schema_url: string;
	source_platform: number;
	start_time: number;
	end_time: number;
	duration: number;
	extra: string;
	user_count: number;
	position?: any;
	collect_stat: number;
	status: number;
	offline_desc: string;
	owner_id: string;
	owner_nickname: string;
	is_original: boolean;
	mid: string;
	binded_challenge_id: number;
	redirect: boolean;
	is_restricted: boolean;
	author_deleted: boolean;
	is_del_video: boolean;
	is_video_self_see: boolean;
	owner_handle: string;
	author_position?: any;
	prevent_download: boolean;
	strong_beat_url: Strong_beat_url;
	unshelve_countries?: any;
	prevent_item_download_status: number;
	external_song_info: any[];
	sec_uid: string;
	avatar_thumb: Avatar_thumb;
	avatar_medium: Avatar_medium;
	avatar_large: Avatar_large;
	preview_start_time: number;
	preview_end_time: number;
	is_commerce_music: boolean;
	is_original_sound: boolean;
	audition_duration: number;
	shoot_duration: number;
	reason_type: number;
	artists: any[];
	lyric_short_position?: any;
	mute_share: boolean;
	tag_list?: any;
	dmv_auto_show: boolean;
	is_pgc: boolean;
	is_matched_metadata: boolean;
	is_audio_url_with_cookie: boolean;
	music_chart_ranks?: any;
	can_background_play: boolean;
	music_status: number;
	video_duration: number;
	pgc_music_type: number;
	author_status: number;
	search_impr: Search_impr;
	artist_user_infos?: any;
	dsp_status: number;
	musician_user_infos?: any;
	luna_info: Luna_info;
	music_collect_count: number;
	music_cover_atmosphere_color_value: string;
}

export interface Xigua_base_info {
	status: number;
	star_altar_order_id: number;
	star_altar_type: number;
}

export interface Play_addr {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_key: string;
	data_size: number;
	file_hash: string;
	file_cs: string;
}

export interface Cover {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Dynamic_cover {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Origin_cover {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Gaussian_cover {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
}

export interface Big_thumb {
	img_num: number;
	uri: string;
	img_url: string;
	img_x_size: number;
	img_y_size: number;
	img_x_len: number;
	img_y_len: number;
	duration: number;
	interval: number;
	fext: string;
	uris: string[];
	img_urls: string[];
}

export interface Play_addr {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_key: string;
	data_size: number;
	file_hash: string;
	file_cs: string;
}

export interface Bit_rate {
	gear_name: string;
	quality_type: number;
	bit_rate: number;
	play_addr: Play_addr;
	is_h265: number;
	is_bytevc1: number;
	hDR_type: string;
	hDR_bit: string;
	fPS: number;
	video_extra: string;
	format: string;
}

export interface Play_addr_265 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_key: string;
	data_size: number;
	file_hash: string;
	file_cs: string;
}

export interface Play_addr_h264 {
	uri: string;
	url_list: string[];
	width: number;
	height: number;
	url_key: string;
	data_size: number;
	file_hash: string;
	file_cs: string;
}

export interface Animated_cover {
	uri: string;
	url_list: string[];
}

export interface Video {
	play_addr: Play_addr;
	cover: Cover;
	height: number;
	width: number;
	dynamic_cover: Dynamic_cover;
	origin_cover: Origin_cover;
	ratio: string;
	gaussian_cover: Gaussian_cover;
	video_model: string;
	big_thumbs: Big_thumb[];
	bit_rate: Bit_rate[];
	duration: number;
	horizontal_type: number;
	is_source_HDR: number;
	play_addr_265: Play_addr_265;
	meta: string;
	play_addr_h264: Play_addr_h264;
	bit_rate_audio?: any;
	animated_cover: Animated_cover;
}

export interface Statistic {
	admire_count: number;
	comment_count: number;
	digg_count: number;
	collect_count: number;
	play_count: number;
	share_count: number;
}

export interface Review_result {
	review_status: number;
}

export interface Statu {
	listen_video_status: number;
	is_delete: boolean;
	allow_share: boolean;
	is_prohibited: boolean;
	in_reviewing: boolean;
	part_see: number;
	private_status: number;
	review_result: Review_result;
}

export interface Text_extra {
	start: number;
	end: number;
	type: number;
	hashtag_name: string;
	hashtag_id: string;
	is_commerce: boolean;
	caption_start: number;
	caption_end: number;
}

export interface Share_info {
	share_url: string;
	share_link_desc: string;
}

export interface Limit_free {
	in_free: boolean;
}

export interface Market_info {
	limit_free: Limit_free;
	marketing_tag?: any;
}

export interface Entertainment_product_info {
	sub_title?: any;
	market_info: Market_info;
	biz: number;
}

export interface Distribute_circle {
	distribute_type: number;
	campus_block_interaction: boolean;
	is_campus: boolean;
}

export interface Risk_info {
	vote: boolean;
	warn: boolean;
	risk_sink: boolean;
	type: number;
	content: string;
}

export interface Comment_words_recommend {
	zero_comment?: any;
}

export interface Video_game_data_channel_config {}

export interface Guide_scene_info {
	guide_scene_type: number;
	feed_origin_gid_info_str: string;
	diamond_expose_info_str: string;
}

export interface Live_appointment_info {}

export interface Fail_info {
	code: number;
	reason: string;
	msg: string;
}

export interface Download_info {
	level: number;
	fail_info: Fail_info;
}

export interface Duet_info {
	level: number;
}

export interface Video_control {
	allow_download: boolean;
	share_type: number;
	show_progress_bar: number;
	draft_progress_bar: number;
	allow_duet: boolean;
	allow_react: boolean;
	prevent_download_type: number;
	allow_dynamic_wallpaper: boolean;
	timer_status: number;
	allow_music: boolean;
	allow_stitch: boolean;
	allow_douplus: boolean;
	allow_share: boolean;
	share_grayed: boolean;
	download_ignore_visibility: boolean;
	duet_ignore_visibility: boolean;
	share_ignore_visibility: boolean;
	download_info: Download_info;
	duet_info: Duet_info;
	allow_record: boolean;
	disable_record_reason: string;
}

export interface Aweme_control {
	can_forward: boolean;
	can_share: boolean;
	can_comment: boolean;
	can_show_comment: boolean;
}

export interface Visual_search_info {
	is_show_entrance: boolean;
	extra: string;
	visual_search_longpress: number;
}

export interface Download_mask_panel {
	code: number;
	show_type: number;
}

export interface Aweme_acl {
	download_mask_panel: Download_mask_panel;
}

export interface Image_comment {}

export interface Impression_data {
	group_id_list_a: number[];
	group_id_list_b: any[];
	similar_id_list_a?: any;
	similar_id_list_b?: any;
	group_id_list_c: any[];
}

export interface Book_bar {}

export interface Vtag_search {
	vtag_enable: boolean;
	vtag_delay_ts: number;
}

export interface Show_follow_button {}

export interface Search_impr {
	entity_id: string;
	entity_type: string;
}

export interface Comment_permission_info {
	comment_permission_status: number;
	can_comment: boolean;
	item_detail_entry: boolean;
	press_entry: boolean;
	toast_guide: boolean;
}

export interface Series_paid_info {
	series_paid_status: number;
	item_price: number;
}

export interface Image_album_music_info {
	begin_time: number;
	end_time: number;
	volume: number;
}

export interface Video_tag {
	tag_id: number;
	tag_name: string;
	level: number;
}

export interface Photo_search_entrance {
	ecom_type: number;
}

export interface Activity {
	id: number;
	type: number;
}

export interface Danmaku_control {
	enable_danmaku: boolean;
	post_privilege_level: number;
	is_post_denied: boolean;
	post_denied_reason: string;
	skip_danmaku: boolean;
	danmaku_cnt: number;
	activities: Activity[];
}

export interface Seo_info {}

export interface Item_warn_notification {
	type: number;
	show: boolean;
	content: string;
}

export interface Aweme_detail {
	aweme_id: string;
	desc: string;
	create_time: number;
	author: Author;
	music: Music;
	xigua_base_info: Xigua_base_info;
	video: Video;
	share_url: string;
	user_digged: number;
	statistics: Statistic;
	status: Statu;
	collection_corner_mark: number;
	text_extra: Text_extra[];
	is_top: number;
	voice_modify_id_list?: any;
	share_info: Share_info;
	entertainment_product_info: Entertainment_product_info;
	video_labels: any[];
	distribute_circle: Distribute_circle;
	duration: number;
	aweme_type: number;
	activity_video_type: number;
	is_use_music: boolean;
	image_infos?: any;
	risk_infos: Risk_info;
	comment_words_recommend: Comment_words_recommend;
	user_recommend_status: number;
	position?: any;
	uniqid_position?: any;
	comment_list?: any;
	author_user_id: number;
	mark_largely_following: boolean;
	geofencing: any[];
	media_type: number;
	yumme_recreason?: any;
	region: string;
	video_text: any[];
	packed_clips?: any;
	collect_stat: number;
	label_top_text?: any;
	promotions: any[];
	group_id: string;
	prevent_download: boolean;
	nickname_position?: any;
	challenge_position?: any;
	dislike_dimension_list_v2?: any;
	disable_relation_bar: number;
	preview_video_status: number;
	long_video?: any;
	video_game_data_channel_config: Video_game_data_channel_config;
	authentication_token: string;
	guide_scene_info: Guide_scene_info;
	caption: string;
	interaction_stickers?: any;
	ref_tts_id_list?: any;
	origin_comment_ids?: any;
	commerce_config_data?: any;
	live_appointment_info: Live_appointment_info;
	video_control: Video_control;
	aweme_control: Aweme_control;
	create_scale_type?: any;
	item_title: string;
	visual_search_info: Visual_search_info;
	image_crop_ctrl: number;
	anchors?: any;
	hybrid_label?: any;
	geofencing_regions?: any;
	boost_status: number;
	aweme_acl: Aweme_acl;
	is_share_post: boolean;
	is_story: number;
	report_action: boolean;
	ref_voice_modify_id_list?: any;
	author_mask_tag: number;
	original: number;
	cover_labels?: any;
	reply_smart_emojis?: any;
	tts_id_list?: any;
	guide_btn_type: number;
	jump_tab_info_list?: any;
	image_comment: Image_comment;
	images?: any;
	relation_labels?: any;
	horizontal_type: number;
	slides_music_beats?: any;
	impression_data: Impression_data;
	book_bar: Book_bar;
	vtag_search: Vtag_search;
	social_tag_list?: any;
	show_follow_button: Show_follow_button;
	duet_aggregate_in_music_tab: boolean;
	is_duet_sing: boolean;
	search_impr: Search_impr;
	comment_permission_info: Comment_permission_info;
	original_images?: any;
	series_paid_info: Series_paid_info;
	img_bitrate?: any;
	comment_gid: number;
	image_album_music_info: Image_album_music_info;
	video_tag: Video_tag[];
	is_collects_selected: number;
	chapter_list?: any;
	should_open_ad_report: boolean;
	is_image_beat: boolean;
	dislike_dimension_list?: any;
	standard_bar_info_list?: any;
	photo_search_entrance: Photo_search_entrance;
	danmaku_control: Danmaku_control;
	is_life_item: boolean;
	seo_info: Seo_info;
	image_list?: any;
	component_info_v2: string;
	common_bar_info: string;
	item_warn_notification: Item_warn_notification;
	origin_text_extra: any[];
	preview_title: string;
}
export interface Aweme_list {
	aweme_id: string;
	desc: string;
	create_time: number;
	author: Author;
	music: Music;
	original: number;
	video: Video;
	share_url: string;
	user_digged: number;
	statistics: Statistic;
	status: Statu;
	component_info_v2: string;
	text_extra: Text_extra[];
	is_top: number;
	user_recommend_status: number;
	share_info: Share_info;
	live_appointment_info: Live_appointment_info;
	video_labels: any[];
	voice_modify_id_list?: any;
	duration: number;
	aweme_type: number;
	slides_music_beats?: any;
	item_title: string;
	image_infos?: any;
	risk_infos: Risk_info;
	ref_voice_modify_id_list?: any;
	is_life_item: boolean;
	position?: any;
	uniqid_position?: any;
	comment_list?: any;
	author_user_id: number;
	mark_largely_following: boolean;
	geofencing: any[];
	comment_words_recommend: Comment_words_recommend;
	authentication_token: string;
	region: string;
	video_text: any[];
	guide_btn_type: number;
	collect_stat: number;
	label_top_text?: any;
	promotions: any[];
	group_id: string;
	prevent_download: boolean;
	nickname_position?: any;
	challenge_position?: any;
	ref_tts_id_list?: any;
	is_image_beat: boolean;
	ip_attribution: string;
	long_video?: any;
	tts_id_list?: any;
	visual_search_info: Visual_search_info;
	feed_comment_config: Feed_comment_config;
	entertainment_product_info: Entertainment_product_info;
	interaction_stickers?: any;
	author_mask_tag: number;
	origin_comment_ids?: any;
	commerce_config_data?: any;
	create_scale_type?: any;
	video_control: Video_control;
	aweme_control: Aweme_control;
	activity_video_type: number;
	caption: string;
	anchor_info: Anchor_info;
	disable_relation_bar: number;
	book_bar: Book_bar;
	anchors?: any;
	hybrid_label?: any;
	geofencing_regions?: any;
	media_type: number;
	common_bar_info: string;
	is_story: number;
	collection_corner_mark: number;
	cover_labels?: any;
	photo_search_entrance: Photo_search_entrance;
	image_crop_ctrl: number;
	packed_clips?: any;
	distribute_circle: Distribute_circle;
	images?: any;
	item_warn_notification: Item_warn_notification;
	horizontal_type: number;
	video_game_data_channel_config: Video_game_data_channel_config;
	impression_data: Impression_data;
	image_comment: Image_comment;
	is_use_music: boolean;
	standard_bar_info_list?: any;
	social_tag_list?: any;
	suggest_words: Suggest_word;
	show_follow_button: Show_follow_button;
	duet_aggregate_in_music_tab: boolean;
	is_duet_sing: boolean;
	comment_permission_info: Comment_permission_info;
	original_images?: any;
	series_paid_info: Series_paid_info;
	comment_gid: number;
	admire_auth: Admire_auth;
	press_panel_info: string;
	image_album_music_info: Image_album_music_info;
	video_tag: Video_tag[];
	is_collects_selected: number;
	chapter_list?: any;
}
export interface Log_pb {
	impr_id: string;
}

