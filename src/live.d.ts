export interface Cover {
	url_list: string[];
}

export interface Flv_pull_url {
	fULL_hD1: string;
	hD1: string;
	sD1: string;
	sD2: string;
}

export interface Hls_pull_url_map {
	fULL_hD1: string;
	hD1: string;
	sD1: string;
	sD2: string;
}

export interface Default_quality {
	name: string;
	sdk_key: string;
	v_codec: string;
	resolution: string;
	level: number;
	v_bit_rate: number;
	additional_content: string;
	fps: number;
	disable: number;
}

export interface Quality {
	name: string;
	sdk_key: string;
	v_codec: string;
	resolution: string;
	level: number;
	v_bit_rate: number;
	additional_content: string;
	fps: number;
	disable: number;
}

export interface Option {
	default_quality: Default_quality;
	qualities: Quality[];
}

export interface Pull_data {
	options: Option;
	stream_data: string;
}

export interface Live_core_sdk_data {
	pull_data: Pull_data;
}

export interface Extra {
	height: number;
	width: number;
	fps: number;
	max_bitrate: number;
	min_bitrate: number;
	default_bitrate: number;
	bitrate_adapt_strategy: number;
	anchor_interact_profile: number;
	audience_interact_profile: number;
	hardware_encode: boolean;
	video_profile: number;
	h265_enable: boolean;
	gop_sec: number;
	bframe_enable: boolean;
	roi: boolean;
	sw_roi: boolean;
	bytevc1_enable: boolean;
}

export interface Pull_data {}

export interface Stream_url {
	flv_pull_url: Flv_pull_url;
	default_resolution: string;
	hls_pull_url_map: Hls_pull_url_map;
	hls_pull_url: string;
	stream_orientation: number;
	live_core_sdk_data: Live_core_sdk_data;
	extra: Extra;
	pull_datas: Pull_data;
}

export interface Avatar_thumb {
	url_list: string[];
}

export interface Follow_info {
	follow_status: number;
	follow_status_str: string;
}

export interface Owner {
	id_str: string;
	sec_uid: string;
	nickname: string;
	avatar_thumb: Avatar_thumb;
	follow_info: Follow_info;
}

export interface Chat {
	unableStyle: number;
	content: string;
	offType: number;
	anchorSwitchForPaidLive: number;
	contentForPaidLive: string;
}

export interface Like {
	unableStyle: number;
	content: string;
	offType: number;
	anchorSwitchForPaidLive: number;
	contentForPaidLive: string;
}

export interface SpecialStyle {
	chat: Chat;
	like: Like;
}

export interface Room_auth {
	chat: boolean;
	danmaku: boolean;
	gift: boolean;
	luckMoney: boolean;
	digg: boolean;
	roomContributor: boolean;
	props: boolean;
	userCard: boolean;
	pOI: boolean;
	moreAnchor: number;
	banner: number;
	share: number;
	userCorner: number;
	landscape: number;
	Landscapechat: number;
	publicScreen: number;
	giftAnchorMt: number;
	recordScreen: number;
	donationSticker: number;
	hourRank: number;
	commerceCard: number;
	Audiochat: number;
	danmakuDefault: number;
	ktvOrderSong: number;
	selectionAlbum: number;
	like: number;
	multiplierPlayback: number;
	downloadVideo: number;
	collect: number;
	timedShutdown: number;
	seek: number;
	denounce: number;
	dislike: number;
	onlyTa: number;
	castScreen: number;
	commentWall: number;
	bulletStyle: number;
	showGamePlugin: number;
	VSgift: number;
	vStopic: number;
	vSRank: number;
	AdmincommentWall: number;
	commerceComponent: number;
	douPlus: number;
	gamePointsPlaying: number;
	poster: number;
	highlights: number;
	typingCommentState: number;
	strokeUpDownGuide: number;
	upRightStatsFloatingLayer: number;
	castScreenExplicit: number;
	selection: number;
	industryService: number;
	verticalRank: number;
	enterEffects: number;
	fansClub: number;
	emojiOutside: number;
	canSellTicket: number;
	douPlusPopularityGem: number;
	missionCenter: number;
	expandScreen: number;
	fansGroup: number;
	topic: number;
	anchorMission: number;
	teleprompter: number;
	longTouch: number;
	specialStyle: SpecialStyle;
	Fixedchat: number;
	QuizgamePointsPlaying: number;
}

export interface Stat {
	total_user_desp: string;
	like_count: number;
	total_user_str: string;
	user_count_str: string;
}

export interface Linker_map {
	1: number;
}

export interface Linker_map_str {}

export interface Playmode_detail {}

export interface Linker_detail {
	linker_play_modes: any[];
	big_party_layout_config_version: number;
	accept_audience_pre_apply: boolean;
	linker_ui_layout: number;
	enable_audience_linkmic: number;
	function_type: string;
	linker_map_str: Linker_map_str;
	ktv_lyric_mode: string;
	init_source: string;
	forbid_apply_from_other: boolean;
	ktv_exhibit_mode: number;
	enlarge_guest_turn_on_source: number;
	playmode_detail: Playmode_detail;
}

export interface Room_view_stat {
	is_hidden: boolean;
	display_short: string;
	display_middle: string;
	display_long: string;
	display_value: number;
	display_version: number;
	incremental: boolean;
	display_type: number;
	display_short_anchor: string;
	display_middle_anchor: string;
	display_long_anchor: string;
}

export interface Scene_type_info {
	is_union_live_room: boolean;
	is_life: boolean;
	is_protected_room: number;
	is_lasted_goods_room: number;
	is_desire_room: number;
	commentary_type: boolean;
	is_sub_orientation_vertical_room: number;
}

export interface Entrance_list {
	group_id: number;
	component_type: number;
	op_type: number;
	text: string;
	schema_url: string;
	show_type: number;
	data_status: number;
	extra: string;
}

export interface More_panel {
	group_id: number;
	component_type: number;
	op_type: number;
	text: string;
	schema_url: string;
	show_type: number;
	data_status: number;
	extra: string;
}

export interface Skin_resource {}

export interface General {
	groupPriority: number[];
	componentSequence: number[];
}

export interface Permutation {
	general: General;
}

export interface Toolbar_data {
	entrance_list: Entrance_list[];
	more_panel: More_panel[];
	max_entrance_cnt: number;
	landscape_up_right: any[];
	skin_resource: Skin_resource;
	max_entrance_cnt_landscape: number;
	permutation: Permutation;
}

export interface Room_cart {
	contain_cart: boolean;
	total: number;
	flash_total: number;
	cart_icon: string;
	show_cart: number;
}

export interface AnchorABMap {
	ab_admin_comment_on_wall: string;
	ab_friend_chat: string;
	admin_pin_ab_group: string;
	admin_privilege_refine: string;
	admin_screen_chat_value: string;
	allow_shared_to_fans: string;
	anchor_other_device: string;
	audience_linkmic_continue: string;
	audio_room_subtitle_opt: string;
	battle_match_rebuild_anchor: string;
	big_party_enable_open_camera: string;
	chat_intercommunicate_multi_anchor: string;
	chat_intercommunicate_pk: string;
	cold_start: string;
	ecom_room_disable_gift: string;
	enable_enter_by_sharing: string;
	enable_link_guest_enter: string;
	enter_message_tip_relation: string;
	enter_source_mark: string;
	featured_public_screen_ab_value: string;
	frequently_chat_ab_value: string;
	friend_room_audio_tuning: string;
	friend_room_support_ns_mode: string;
	friend_share_video_feature_type: string;
	game_link_entrance: string;
	gift_hide_tip: string;
	guest_battle_1v6_anchor_involved: string;
	guest_battle_crown_upgrade: string;
	guest_battle_expand: string;
	guest_battle_score_expand: string;
	guest_battle_upgrade: string;
	interact_anchor_guide: string;
	ktv_aigc_mv: string;
	ktv_anchor_enable_add_all: string;
	ktv_atmosphere_video: string;
	ktv_auto_mute_self: string;
	ktv_challenge_minus_gift: string;
	ktv_component_auto_open: string;
	ktv_component_new_midi: string;
	ktv_enable_avatar: string;
	ktv_enable_open_camera: string;
	ktv_fragment_song: string;
	ktv_grab_guide_song: string;
	ktv_guide_song_switch: string;
	ktv_kick_when_linker_full: string;
	ktv_mc_host_show_tag: string;
	ktv_midi_score: string;
	ktv_midi_sense_enhance: string;
	ktv_new_challenge: string;
	ktv_new_mv: string;
	ktv_order_chain_opt: string;
	ktv_profit_dress_bg: string;
	ktv_room_atmosphere: string;
	ktv_singing_hot_rank: string;
	ktv_video_stream_optimize: string;
	ktv_want_listen_enable: string;
	linkmic_multi_chorus: string;
	linkmic_starwish: string;
	live_anchor_enable_chorus: string;
	live_anchor_enable_custom_position: string;
	live_anchor_hit_new_audience_linkmic: string;
	live_anchor_hit_position_opt: string;
	live_anchor_hit_video_bid_paid: string;
	live_anchor_hit_video_teamfight: string;
	live_answer_on_wall: string;
	live_audience_linkmic_pre_apply: string;
	live_audience_linkmic_pre_apply_v2: string;
	live_audio_enable_c_position: string;
	live_chat_streamline: string;
	live_dou_plus_enter: string;
	live_invite_panel_opt: string;
	live_ktv_enable_beat: string;
	live_ktv_group: string;
	live_ktv_show_singer_icon: string;
	live_ktv_singing_challenge: string;
	live_linkmic_battle_optimize: string;
	live_linkmic_ktv_anchor_lyric_mode: string;
	live_linkmic_order_sing_custom_gift: string;
	live_linkmic_order_sing_micro_opt: string;
	live_linkmic_order_sing_new: string;
	live_linkmic_order_sing_v3: string;
	live_pc_helper_new_layout: string;
	live_room_manage_style: string;
	live_team_fight_flexible: string;
	live_video_enable_c_position: string;
	live_video_enable_self_discipline: string;
	live_video_host_identity_enable: string;
	live_video_on_wall: string;
	live_video_share: string;
	lonely_room_enter_msg_unfold: string;
	merge_ktv_mode_enable: string;
	merge_ktv_optimize_enable: string;
	opt_audience_linkmic: string;
	opt_paid_link_feature_switch: string;
	optran_paid_linkmic: string;
	order_sing_aigcmv: string;
	order_sing_mv: string;
	radio_prepare_apply: string;
	room_battle_compose_message: string;
	room_double_like: string;
	search_user_entry_enable: string;
	self_discipline_name: string;
	self_discipline_v2: string;
	self_discipline_v3: string;
	social_share_video_adjust_volume: string;
	support_multiple_add_price: string;
	themed_competition: string;
	themed_competition_v2: string;
	traffic_strategy: string;
	video_ktv_challenge: string;
	video_talk_enable_avatar: string;
	vip_elaborate: string;
	webcast_chat_model: string;
}

export interface Privilege_info {}

export interface Privilege_info_map {}

export interface Paid_live_data {
	paid_type: number;
	view_right: number;
	duration: number;
	delivery: number;
	need_delivery_notice: boolean;
	anchor_right: number;
	pay_ab_type: number;
	privilege_info: Privilege_info;
	privilege_info_map: Privilege_info_map;
}

export interface Req_user {
	user_share_room_score: number;
	enter_user_device_type: number;
}

export interface Deco_detail {}

export interface More_panel_info {
	load_strategy: number;
}

export interface Appointment_info {
	appointment_id: number;
	is_subscribe: boolean;
}

export interface Web_skin {
	enable_skin: boolean;
}

export interface Programme {
	enable_programme: boolean;
}

export interface Background {
	strategy_type: number;
	use_config_duration: boolean;
	pause_monitor_duration: string;
}

export interface Detail {
	strategy_type: number;
	use_config_duration: boolean;
	pause_monitor_duration: string;
}

export interface Tab {
	strategy_type: number;
	use_config_duration: boolean;
	pause_monitor_duration: string;
}

export interface Strategy_config {
	background: Background;
	detail: Detail;
	tab: Tab;
}

export interface Web_live_port_optimization {
	strategy_config: Strategy_config;
	strategy_extra: string;
}

export interface Other {
	deco_detail: Deco_detail;
	more_panel_info: More_panel_info;
	appointment_info: Appointment_info;
	web_skin: Web_skin;
	programme: Programme;
	web_live_port_optimization: Web_live_port_optimization;
	lvideo_item_id: number;
}

export interface Data {
	id_str: string;
	status: number;
	status_str: string;
	title: string;
	user_count_str: string;
	cover: Cover;
	stream_url: Stream_url;
	mosaic_status: number;
	mosaic_status_str: string;
	admin_user_ids: number[];
	admin_user_ids_str: string[];
	owner: Owner;
	room_auth: Room_auth;
	live_room_mode: number;
	stats: Stat;
	has_commerce_goods: boolean;
	linker_map: Linker_map;
	linker_detail: Linker_detail;
	room_view_stats: Room_view_stat;
	scene_type_info: Scene_type_info;
	toolbar_data: Toolbar_data;
	room_cart: Room_cart;
	anchorABMap: AnchorABMap;
	like_count: number;
	owner_user_id_str: string;
	paid_live_data: Paid_live_data;
	req_user: Req_user;
	others: Other;
}

export interface Extra {
	digg_color: string;
	pay_scores: string;
	is_official_channel: boolean;
	signature: string;
}

export interface Avatar_thumb {
	url_list: string[];
}

export interface Follow_info {
	follow_status: number;
	follow_status_str: string;
}

export interface User {
	id_str: string;
	sec_uid: string;
	nickname: string;
	avatar_thumb: Avatar_thumb;
	follow_info: Follow_info;
}

export interface Partition_road_map {}

export interface Flv_pull_url {}

export interface Hls_pull_url_map {}

export interface Pull_data {}

export interface Web_stream_url {
	flv_pull_url: Flv_pull_url;
	default_resolution: string;
	hls_pull_url_map: Hls_pull_url_map;
	hls_pull_url: string;
	stream_orientation: number;
	pull_datas: Pull_data;
}

export interface Item {}

export interface Login_lead {
	is_login: boolean;
	level: number;
	items: Item;
}

export interface Data {
	data: Data[];
	enter_room_id: string;
	extra: Extra;
	user: User;
	qrcode_url: string;
	enter_mode: number;
	room_status: number;
	partition_road_map: Partition_road_map;
	similar_rooms: any[];
	shark_decision_conf: string;
	web_stream_url: Web_stream_url;
	login_lead: Login_lead;
}

export interface Extra {
	now: number;
}

export interface LiveResult {
	data: Data;
	extra: Extra;
	status_code: number;
}