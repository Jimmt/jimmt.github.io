package com.jimmt.smitepractice.client;

import com.google.gwt.i18n.client.NumberFormat;
import com.jimmt.smitepractice.FloatFormatter;

public class HtmlFloatFormatter implements FloatFormatter {

	@Override
	public String getFormattedString(float value) {
		NumberFormat format = NumberFormat.getFormat("##.#");
		return format.format(value);
	}
}
