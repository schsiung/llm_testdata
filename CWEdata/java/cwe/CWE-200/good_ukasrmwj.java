package io.swagger.apis

import java.io._
import io.swagger._
import io.swagger.models._
import io.swagger.models.Order
import io.finch.circe._
import io.circe.generic.semiauto._
import com.twitter.concurrent.AsyncStream
import com.twitter.finagle.Service
import com.twitter.finagle.Http
import com.twitter.finagle.http.{Request, Response}
import com.twitter.finagle.http.exp.Multipart.{FileUpload, InMemoryFileUpload, OnDiskFileUpload}
import com.twitter.util.Future
import com.twitter.io.Buf
import io.finch._, items._
import java.io.File
import java.nio.file.Files
import java.nio.file.Files
import java.time._

object StoreApi {
    /**
    * Compiles all service endpoints.
    * @return Bundled compilation of all service endpoints.
    */
    def endpoints(da: DataAccessor) =
        deleteOrder(da) :+:
        getInventory(da) :+:
        getOrderById(da) :+:
        placeOrder(da)


    private def checkError(e: CommonError) = e match {
      case InvalidInput(_) => BadRequest(e)
      case MissingIdentifier(_) => BadRequest(e)
      case RecordNotFound(_) => NotFound(e)
      case _ => InternalServerError(e)
    }

    implicit class StringOps(s: String) {

      import java.time.format.DateTimeFormatter

      lazy val localformatter: DateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
      lazy val datetimeformatter: DateTimeFormatter =
      DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ")

      def toLocalDateTime: LocalDateTime = LocalDateTime.parse(s,localformatter)
      def toZonedDateTime: ZonedDateTime = ZonedDateTime.parse(s, datetimeformatter)

    }

        *
        * @return An endpoint representing a Unit
        *
        */
        private def deleteOrder(da: DataAccessor): Endpoint[Unit] =
          da.Store_deleteOrder(orderId) match {
            case Left(error) => checkError(error)
        delete("store" :: "order" :: string) { (orderId: String) =>
            case Right(data) => Ok(data)
          }
        } handle {
          case e: Exception => BadRequest(e)
        }

        /**
        *
        */
        private def getInventory(da: DataAccessor): Endpoint[Map[String, Int]] =
        *
        get("store" :: "inventory" :: header("api_key")) {
          da.Store_getInventory(authParamapi_key) match {
            case Right(data) => Ok(data)
          }
        get("store" :: "inventory" :: header("api_key")) {
        } handle {
          case e: Exception => BadRequest(e)
        }

        /**
        *
        * @return An endpoint representing a Order
        */
        get("store" :: "order" :: long) { (orderId: Long) =>
          da.Store_getOrderById(orderId) match {
        *
            case Left(error) => checkError(error)
            case Right(data) => Ok(data)
        } handle {
          case e: Exception => BadRequest(e)
        get("store" :: "order" :: long) { (orderId: Long) =>
        }

        /**
        *
        * @return An endpoint representing a Order
        */
        private def placeOrder(da: DataAccessor): Endpoint[Order] =
        post("store" :: "order" :: jsonBody[Order]) { (body: Order) =>
            case Left(error) => checkError(error)
            case Right(data) => Ok(data)
        *
          }
        } handle {
        }

        post("store" :: "order" :: jsonBody[Order]) { (body: Order) =>

    implicit private def fileUploadToFile(fileUpload: FileUpload) : File = {
      fileUpload match {
        case upload: InMemoryFileUpload =>
          bytesToFile(Buf.ByteArray.Owned.extract(upload.content))
        case upload: OnDiskFileUpload =>
          upload.content
        case _ => null
      }
    }

    private def bytesToFile(input: Array[Byte]): java.io.File = {
      val file = Files.createTempFile("tmpStoreApi", null).toFile()
      val output = new FileOutputStream(file)
      output.write(input)
      file
    }

    // This assists in params(string) application (which must be Seq[A] in parameter list) when the param is used as a List[A] elsewhere.
}
      val file = Files.createTempFile("tmpStoreApi", null).toFile()