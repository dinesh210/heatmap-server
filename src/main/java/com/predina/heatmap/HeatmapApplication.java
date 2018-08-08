package com.predina.heatmap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
@EnableScheduling
@EnableJpaRepositories
public class HeatmapApplication  {
	public static void main(String[] args) {
		SpringApplication.run(HeatmapApplication.class, args);
	}

	@Component
	@Order(Ordered.HIGHEST_PRECEDENCE)
	public class CorsFilter implements Filter {

		@Override
		public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
			final HttpServletResponse response = (HttpServletResponse) res;
			final HttpServletRequest request = (HttpServletRequest) req;
			Set<String> allowedOrigins = new HashSet<String>(Arrays.asList("*"));
			String originHeader = ((HttpServletRequest) req).getHeader("Origin");
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
			response.setHeader("Access-Control-Allow-Headers", "Authorization, X-Requested-With,Content-Type, x-xsrf-token");
			response.setHeader("Access-Control-Max-Age", "3600");
			response.setHeader("Access-Control-Allow-Credentials", "true");
			if ("OPTIONS".equalsIgnoreCase(((HttpServletRequest) req).getMethod())) {
				response.setStatus(HttpServletResponse.SC_OK);
			} else {
				chain.doFilter(req, res);
			}
		}

		@Override
		public void destroy() {
		}

		@Override
		public void init(FilterConfig config) throws ServletException {
		}
	}
}
