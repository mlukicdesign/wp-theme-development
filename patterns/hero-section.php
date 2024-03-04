<?php
/**
 * Title: Hero Section
 * Slug: frost/hero-section
 * Categories: featured
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"right":"30px","bottom":"var:preset|spacing|x-large","left":"30px","top":"70px"},"margin":{"top":"0px"},"blockGap":"10px"}},"className":"welcome","layout":{"type":"constrained","wideSize":"800px"}} -->
<div class="wp-block-group alignfull welcome"
    style="margin-top:0px;padding-top:100px;padding-right:30px;padding-bottom:var(--wp--preset--spacing--x-large);">
    <!-- wp:heading {"textAlign":"center","anchor":"we-reimagine-how-to-build-wordpress-websites","style":{"typography":{"letterSpacing":"-1px"},"spacing":{"margin":{"bottom":"0px"}}},"className":"wp-block-heading","fontSize":"max-72"} -->
    <h2 class="wp-block-heading has-text-align-left has-max-72-font-size" style="margin-bottom:0px;letter-spacing:-1px">
        <?php echo esc_html__('Experience the next generation of WordPress.', 'frost'); ?>
    </h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center","fontSize":"large"} -->
    <p class="has-text-align-center has-large-font-size">
        <?php echo esc_html__('Frost is the ultimate WordPress theme for website builders.', 'frost'); ?>
    </p>
    <!-- /wp:paragraph -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"blockGap":"10px","margin":{"top":"30px"}}}} -->
    <div class="wp-block-buttons" style="margin-top:30px"><!-- wp:button {"fontSize":"small"} -->
        <div class="wp-block-button has-custom-font-size has-small-font-size"><a
                class="wp-block-button__link wp-element-button">
                <?php echo esc_html__('Get Started', 'frost'); ?>
            </a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline-background is-style-outline","fontSize":"small"} -->
        <div
            class="wp-block-button has-custom-font-size is-style-outline-background is-style-outline has-small-font-size">
            <a class="wp-block-button__link wp-element-button" href="#">
                <?php echo esc_html__('Learn More', 'frost'); ?>
            </a>
        </div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->