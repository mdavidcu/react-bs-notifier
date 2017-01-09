import React from "react";

import { bootstrap } from "toetag";
import Icon from "./icon";

import useSheet from "react-jss-preset-civicsource";
import classNames from "classnames";

const styles = {
	innerAlert: {
		marginBottom: bootstrap.paddingBaseVertical,
		display: "inline-block",
		textAlign: "left"
	},
	msgContainer: {
		display: "inline-block"
	},
	icon: {
		verticalAlign: "top",
		fontSize: bootstrap.fontSizeH4,
		paddingRight: bootstrap.paddingLargeHorizontal,
		opacity: 0.2
	},
	headline: {
		margin: 0,
		marginBottom: bootstrap.paddingBaseVertical
	},
	body: {
		maxWidth: "40em"
	}
};

const Alert = ({
	type = "info",
	children,
	headline,
	onDismiss,
	dismissTitle = "Dismiss",
	sheet: { classes },
    className,
	showIcon = true
}) => {
	const isDismissable = !!onDismiss;
	const css = `alert ${isDismissable ? "alert-dismissible" : ""} alert-${type} ${classes.innerAlert}`;
	const dismiss = isDismissable ? <button type="button" className="close" title={dismissTitle} onClick={onDismiss}>&times;</button> : null;

	return (
		<div> {/* this outer div is important so the alerts stack on top of one another... don't delete it */}
			<div className={classNames(className, css)}>
				{dismiss}

				{showIcon ? <Icon className={classes.icon} type={type} /> : null}
				<div className={classes.msgContainer}>
					{headline ? <h4 className={classes.headline}>{headline}</h4> : null}
					<div className={classes.body}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default useSheet(Alert, styles);