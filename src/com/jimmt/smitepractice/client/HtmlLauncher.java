package com.jimmt.smitepractice.client;

import com.badlogic.gdx.ApplicationListener;
import com.badlogic.gdx.backends.gwt.GwtApplication;
import com.badlogic.gdx.backends.gwt.GwtApplicationConfiguration;
import com.jimmt.smitepractice.SmitePractice;

public class HtmlLauncher extends GwtApplication {

        @Override
        public GwtApplicationConfiguration getConfig () {
                return new GwtApplicationConfiguration(1200, 720);
        }

        @Override
        public ApplicationListener getApplicationListener () {
                return new SmitePractice(new HtmlServices(), new HtmlFloatFormatter());
        }
}