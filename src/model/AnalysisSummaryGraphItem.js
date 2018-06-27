/**
 * ProWritingAid API V2
 * Official ProWritingAid API Version 2
 *
 * OpenAPI spec version: v2
 * Contact: hello@prowritingaid.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApiV2) {
      root.ProWritingAidApiV2 = {};
    }
    root.ProWritingAidApiV2.AnalysisSummaryGraphItem = factory(root.ProWritingAidApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AnalysisSummaryGraphItem model module.
   * @module model/AnalysisSummaryGraphItem
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AnalysisSummaryGraphItem</code>.
   * @alias module:model/AnalysisSummaryGraphItem
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AnalysisSummaryGraphItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalysisSummaryGraphItem} obj Optional instance to populate.
   * @return {module:model/AnalysisSummaryGraphItem} The populated <code>AnalysisSummaryGraphItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Label')) {
        obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
      }
      if (data.hasOwnProperty('Color')) {
        obj['Color'] = ApiClient.convertToType(data['Color'], 'String');
      }
      if (data.hasOwnProperty('Length')) {
        obj['Length'] = ApiClient.convertToType(data['Length'], 'Number');
      }
      if (data.hasOwnProperty('SubCategory')) {
        obj['SubCategory'] = ApiClient.convertToType(data['SubCategory'], 'String');
      }
      if (data.hasOwnProperty('Index')) {
        obj['Index'] = ApiClient.convertToType(data['Index'], 'Number');
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Label
   */
  exports.prototype['Label'] = undefined;
  /**
   * @member {String} Color
   */
  exports.prototype['Color'] = undefined;
  /**
   * @member {Number} Length
   */
  exports.prototype['Length'] = undefined;
  /**
   * @member {String} SubCategory
   */
  exports.prototype['SubCategory'] = undefined;
  /**
   * @member {Number} Index
   */
  exports.prototype['Index'] = undefined;
  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;



  return exports;
}));


