(function(){var o,i;i=!1,o=function(){var n,t,e;return e=window.cloudsponge&&(cloudsponge.initOptions.key||cloudsponge.initOptions.domain_key)||window.csPageOptions&&(csPageOptions.key||csPageOptions.domain_key),!i&&e&&(i=!0,(t=document.createElement("script")).src="https://api.cloudsponge.com/widget/"+e+".js",t.id="__cloudsponge_loader_script",(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,n)),e},window.cloudsponge={initOptions:{_loader:!0},init:function(n){var t,e;if(n)for(t in n)e=n[t],cloudsponge.initOptions[t]=e;return o()},launch:function(){return!1}},o()||(document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o)))}).call(this);