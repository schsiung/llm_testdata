<?php
/**
 * EverestForms Entry Functions
 *
 * @package EverestForms\Functions
 * @since   1.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Get entry.
 *
 * @param  int|EVF_Entry $id Entry ID or object.
 * @return EVF_Entry|null
 */
function evf_get_entry( $id ) {
	global $wpdb;

	$entry = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}evf_entries WHERE entry_id = %d LIMIT 1;", $id ) ); // WPCS: cache ok, DB call ok.

	if ( apply_filters( 'everest_forms_get_entry_metadata', true ) ) {
		$results     = $wpdb->get_results( $wpdb->prepare( "SELECT meta_key,meta_value FROM {$wpdb->prefix}evf_entrymeta WHERE entry_id = %d", $id ), ARRAY_A );
		$entry->meta = wp_list_pluck( $results, 'meta_value', 'meta_key' );
	}

	return 0 !== $entry ? $entry : null;
}

/**
 * Get all entries IDs.
 *
 * @param  int $form_id Form ID.
 * @return int[]
 */
function evf_get_entries_ids( $form_id ) {
	global $wpdb;

	$results = $wpdb->get_results( $wpdb->prepare( "SELECT entry_id FROM {$wpdb->prefix}evf_entries WHERE form_id = %d", $form_id ) ); // WPCS: cache ok, DB call ok.

	return array_map( 'intval', wp_list_pluck( $results, 'entry_id' ) );
}

/**
 * Get entry statuses.
 *
 * @return array
 */
function evf_get_entry_statuses() {
	return apply_filters(
		'everest_forms_entry_statuses',
		array(
			'publish' => __( 'Published', 'everest-forms' ),
			'trash'   => __( 'Trash', 'everest-forms' ),
		)
	);
}

/**
 * Search entries.
 *
 * @param  array $args Search arguments.
 * @return array
 */
function evf_search_entries( $args ) {
	global $wpdb;

	$args = wp_parse_args(
		$args,
		array(
			'limit'   => 10,
			'offset'  => 0,
			'order'   => 'DESC',
			'orderby' => 'entry_id',
		)
	);

	$statuses     = array_keys( evf_get_entry_statuses() );
	$valid_fields = array( 'date', 'form_id', 'title', 'status' );

	// Check if form ID is valid for entries.
	if ( ! array_key_exists( $args['form_id'], evf_get_all_forms() ) ) {
		return array();
	}

	$query   = array();
	$query[] = "SELECT DISTINCT {$wpdb->prefix}evf_entries.entry_id FROM {$wpdb->prefix}evf_entries INNER JOIN {$wpdb->prefix}evf_entrymeta WHERE {$wpdb->prefix}evf_entries.entry_id = {$wpdb->prefix}evf_entrymeta.entry_id";

	if ( ! empty( $args['search'] ) ) {
		$like    = '%' . $wpdb->esc_like( $args['search'] ) . '%';
		$query[] = $wpdb->prepare( 'AND meta_value LIKE %s', $like );
	}

	if ( ! empty( $args['form_id'] ) ) {
		$query[] = $wpdb->prepare( 'AND form_id = %d', absint( $args['form_id'] ) );
	}

	if ( ! empty( $args['status'] ) ) {
		$query[] = $wpdb->prepare( 'AND `status` = %s', isset( $statuses[ $args['status'] ] ) ? $statuses[ $args['status'] ] : 'publish' );
	}

	$orderby     = in_array( $args['orderby'], $valid_fields, true ) ? $args['orderby'] : 'entry_id';
	$order       = 'DESC' === strtoupper( $args['order'] ) ? 'DESC' : 'ASC';
	$orderby_sql = sanitize_sql_orderby( "{$orderby} {$order}" );
	$query[]     = "ORDER BY {$orderby_sql}";

	if ( -1 < $args['limit'] ) {
		$query[] = $wpdb->prepare( 'LIMIT %d', absint( $args['limit'] ) );
	}

	if ( 0 < $args['offset'] ) {
		$query[] = $wpdb->prepare( 'LIMIT %d', absint( $args['offset'] ) );
	}

	// phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
	$results = $wpdb->get_results( implode( ' ', $query ), ARRAY_A );

	$ids = wp_list_pluck( $results, 'entry_id' );

	return $ids;
}

/**
 * Get total entries counts by status.
 *
 * @param  int $form_id Form ID.
 * @return array
 */
function evf_get_count_entries_by_status( $form_id ) {
	$statuses = array_keys( evf_get_entry_statuses() );
	$counts   = array();

	foreach ( $statuses as $status ) {
		$count = count(
			evf_search_entries(
				array(
					'limit'   => -1,
					'status'  => $status,
					'form_id' => $form_id,
				)
			)
		);

		$counts[ $status ] = $count;
	}

	return $counts;
}

/**
 * Get total next entries counts by last entry.
 *
 * @since 1.4.10
 *
 * @param  int $form_id    Form ID.
 * @param  int $last_entry Last Form ID.
 * @return int[]
 */
function evf_get_count_entries_by_last_entry( $form_id, $last_entry ) {
	global $wpdb;

	return $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(entry_id) FROM {$wpdb->prefix}evf_entries WHERE form_id = %d AND entry_id > %d", $form_id, $last_entry ) );
}